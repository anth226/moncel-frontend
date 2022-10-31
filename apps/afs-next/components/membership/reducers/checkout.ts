import axios from "axios";
import { NextRouter } from 'next/router';
import { Reducer, Dispatch } from "react";
import { loadStripe, Stripe, StripeCardElement, PaymentMethodCreateParams, } from '@stripe/stripe-js';

const TEST_KEY = "pk_test_VpppYHXesCXeyfoCRp7WYjyC";

const getLiveKey = async () => {
    // Fetch stripe config
    const response = await axios.get('https://payments.foodsafety.com.au/payments/config');
    return TEST_KEY;
    // return response.data.stripe.pub_key; // prod key
}

// Mounts stripe card element and logic after load (client-side use only)
export const mountStripe = async (cardFieldContainer: string) => {
    const stripe = await loadStripe(await getLiveKey());
    if(!stripe) {
        console.error('Failed to load stripe');
        return false;
    }
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount(`#${cardFieldContainer}`);

    // Add a few events
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cardElement.addEventListener('change', ({ error }: { error: ErrorEvent}) => { // eslint-disable-line
        const displayError = document.getElementById('card-errors');
        if (displayError && error) {
          displayError.textContent = error.message;
        } else if(displayError) {
          displayError.textContent = '';
        }
    });
    return { stripe, cardElement };
}

export const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    verifyEmail: "",
    termsAccepted: false,
    paymentMethodOk: true,
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    province: "",
};

const initialFormErrors = Object.keys(initialFormData).reduce((errors, fieldname: string) => {
    errors[fieldname as keyof typeof initialFormData] = undefined;
    return errors;
}, {} as Partial<typeof initialFormData>)

export const initialFormState = {
    valid: false,
    data: initialFormData,
    errors: initialFormErrors,
}

export type FIELD_NAMES = keyof typeof initialFormData;

// treat all actions as updates. action is an object containing all fields to update
export const reducer: Reducer<typeof initialFormState, Partial<typeof initialFormData>> = (state: typeof initialFormState, action: Partial<typeof initialFormData>) => {
    // validate incoming state
    const newErrors: Partial<typeof initialFormErrors> = {
        ...state.errors,
    };
    const newData = {
        ...state.data,
        ...action,
    }
    let field: keyof typeof initialFormData = 'firstName';
    if(field in action) {
        if(newData[field] == "") {
            newErrors[field] = "Please enter your first name.";
        }
        else {
            newErrors[field] = undefined;
        }
    }

    field = 'lastName';
    if(field in action) {
        if(newData[field] == "") {
            newErrors[field] = "Please enter your last name.";
        }
        else {
            newErrors[field] = undefined;
        }
    }

    field = 'email';
    if(field in action && !!newData['verifyEmail']) {
        if(newData[field] != newData['verifyEmail']) {
            newErrors[field] = "Email does not match";
            newErrors['email'] = "Email does not match";
        } 
        else {
            newErrors[field] = undefined;
            newErrors['email'] = undefined;
        }
    }

    field = 'verifyEmail';
    if(field in action) {
        if(newData[field] != newData['email']) {
            newErrors[field] = "Email does not match";
            newErrors['email'] = "Email does not match";
        } 
        else {
            newErrors[field] = undefined;
            newErrors['email'] = undefined;
        }
    }
    
    if('address1' in action || 'address2' in action) {
      if(newData['address1'] == "") {
        newErrors['address1'] = "Please enter your address.";
      }
      else {
        newErrors['address1'] = undefined;
      }
    }

    field = 'city';
    if(field in action) {
        if(newData[field] == "") {
            newErrors[field] = "Please enter your city.";
        }
        else {
            newErrors[field] = undefined;
        }
    }

    field = 'province';
    if(field in action) {
        if(newData[field] == "") {
            newErrors[field] = "Please enter your state.";
        }
        else {
            newErrors[field] = undefined;
        }
    }

    field = 'postalCode';
    if(field in action) {
        if(newData[field] == "") {
            newErrors[field] = "Please enter your postal code.";
        }
        else {
            newErrors[field] = undefined;
        }
    }

    const valid = !Object.values(newErrors).some(x => !!x) && newData['termsAccepted'];

    const newState = {
        valid,
        data: newData,
        errors: newErrors,
    };

    return newState;
};

export const submitPayment = (stripe: Stripe, router: NextRouter, cardElement: StripeCardElement) => async (formData: typeof initialFormData) => {
  // Create payment method via stripe
  const paymentMethodResult = await createPayment(stripe, cardElement)({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    address: {
      line1: formData.address1,
      line2: formData.address2,
      city: formData.city,
      state: formData.province,
      postal_code: formData.postalCode,
      country: 'AU',
    }
  });

  if(!paymentMethodResult) {
    // creating payment method failed; createPayment should have displayed the error so here we do nothing
    return;
  }
  //If saved, we can use the ID to create an order via. the server
  const person = {
    'first_name': formData.firstName,
    'last_name': formData.lastName,
    'email': formData.email,
    'payment_id': paymentMethodResult.id,
    'sku': 'AFSMEM01',
    'province': formData.province,
    'country': "AU",
  }

  // Was a promo code used?
  // let lastPromo = '';
  // const queryString = new URLSearchParams(window.location.search);
  // if (queryString.has('promo')) {
  //   person.promo = queryString.get('promo')!;
  //   lastPromo = person.promo;
  // }

//   // Send data to customer.io
//   if (_cio && _cio.identify) {
//         _cio.identify({
//             id: person.email,
//             email: person.email,
//             first_name: person.first_name,
//             last_name: person.last_name,
//             geo_city: city,
//             geo_region: region,
//             geo_country: country,
//             country: 'CA',
//             created_at: Math.floor(Date.now()/1000)});
//             _cio.track("transaction_submit", {
//             product: "AFSMEM",
//             program: "AFSMEM01",
//             auth_code: lastPromo,
//             grand_total: lastEstimate.total,
//             product_price: 99.95,
//             product_name: 'AIFS Membership',
//             product_sku: 'AFSMEM',
//             quantity: 1,
//             discount_amount: lastEstimate.total - 99.95,
//             tax: 9.99
//         });
//     }
  const response = await fetch(
    'https://payments.foodsafety.com.au/payments/purchase',
    {'method': 'post',
     'headers': {'Content-Type': 'application/json'},
     'body': JSON.stringify(person)});

  if (!response.ok) {
    const displayError = document.getElementById('card-errors');
    try {
      const result = await response.json();
      // Check if it's a bad field
      if (result.status == 'bad_field') {

        // For bad promo codes only
        if (result.details.promo) {
          const msg = 'The promo code is invalid.';
          if(displayError) displayError.textContent = 'The promo code is invalid.';
          console.error(msg)
        } else {
          const keys = Object.keys(result.details);
          keys.forEach((i) => {
            try {
              document!.querySelector("#" +i)!.classList.add('fail');
            } catch(e) {
              console.error('Unable to display invalid promo code error');
            }
          });
          if(displayError) {
            displayError.textContent = 'All fields are required.';
          } else {
            console.error('unable to display field error')
          }
        }

      } else if (result.status == 'bad_stripe') {
        if(displayError) {
          displayError.textContent = result.details;
          displayError.classList.add('fail');
        } else {
          console.error(`unable to display error: ${result.details}`)
        }
      } else {
        if(displayError) {
          displayError.textContent = result.details;
        } else {
          console.error(`unable to display error ${result.details}`)
        }
      }
    } catch {
      if (displayError) {
        displayError.textContent = 'Please try your purchase again later.';
      } else {
        console.error(`unrecognized error, and unable to tell user to try again later`)
      }
    }

    // setButtonState(true);
    return false;

  } else {
    const result = await response.json();
    router.push(`/confirmation?order_id=${result.order_number}`)
    // mixpanel.alias(person.email);
    // mixpanel.people.set({
    //     '$first_name': person.first_name,
    //     '$last_name': person.last_name,
    //     '$email': person.email
    // });

    // mixpanel.track('visited_checkout_success', {'Brand': 'AFS'});
    // smartlook('track','visited_checkout_success', {'Brand': 'AFS'});

    // var transactionData = {
    //   'Brand': 'AFS',
    //   'Order ID': result.order_number,
    //   'Grand Total': lastEstimate.total,
    //   'Discount': lastEstimate.discount_amount,
    //   'Tax': 9.99,
    //   'Auth Code': lastPromo};

  //   var product = {
  //     'Brand': 'AFS',
  //     'Order ID': result.order_number,
  //     'Product Name': 'AIFS Membership',
  //     'Product Code': 'AFSMEM',
  //     'Category': 'Food Safety',
  //     'Price': 89.96, // this price is wrong lol
  //     'Quantity': 1
  // };

    // setTimeout(function() { mixpanel.track('completed_transaction', transactionData); }, 100);
    // smartlook('track','completed_transaction', transactionData);

    // mixpanel.track('purchase_confirmation', product);
    // smartlook('track','purchase_confirmation', product);

    // dataLayer.push({
    //   'event': 'purchase',
    //   'ecommerce': {
    //     'purchase': {
    //       'actionField': {
    //         'id': result.order_number,
    //         'revenue': lastEstimate.total,
    //         'tax': lastEstimate.tax,
    //         'coupon': lastPromo
    //       },
    //       'products': [{
    //         'name': 'AIFS Membership',
    //         'id' : 'AFSMEM',
    //         'price' : 89.96,
    //         'brand' : 'AFS',
    //         'category' : 'Food Safety',
    //         'quantity' : 1
    //       }]
    //     }
    //   }
    // });

    // setTimeout(function(e) {window.location = '/confirmation?order_id=' +result.order_number}, 1000);
  }
}

interface BillingDetails {
  firstName: string,
  lastName: string,
  email: string,
  address: PaymentMethodCreateParams.BillingDetails.Address,
}

export const createPayment = (stripe: Stripe, cardElement: StripeCardElement) => async (billingDetails: BillingDetails) => {
    // Send payment details to Stripe
    const {paymentMethod, error} = await stripe.createPaymentMethod({
      'type': 'card',
      'card': cardElement,
      'billing_details': {
        'name': `${billingDetails.firstName} ${billingDetails.lastName}`,
        'email': billingDetails.email,
      }
    });

    if (error) {
      const displayError = document.getElementById('card-errors');
      if (error && error.message && displayError) {
        displayError.textContent = error.message;
      } else if(displayError) {
        displayError.textContent = '';
      }
      return false; // signal failure
    } else {
      return paymentMethod;
    }
}
