import X2JS from 'x2js';

describe('Each url in the sitemap', () => {
    let urls: string[] = [];
    beforeAll(() => {
        // fetch sitemap and parse urls
        cy.request('/sitemap.xml')
            .its('body').then(body => {
                const x2js =  new X2JS();
                const sitemapJson = x2js.xml2js(body);
                urls = sitemapJson.urlset.url.map(sitemapUrl => {
                    const { loc } = sitemapUrl;
                    return loc.replace(/index$/, "");
                });
                
            });

      
    });
    beforeEach(() => {
        cy.viewport('macbook-16');
    })

    it('has a screenshot test', () => {
        urls.forEach(url => {
            // skip file names that begin with _ "e.g. /_document or /_app"
            if(url.match(/_\w+$/)) return;
            cy.visit(url);
            cy.scrollTo('bottom', { ensureScrollable: false, duration: 1000, easing: 'linear' }).wait(5000, { log: false }).matchImageSnapshot(`screenshot-${url}`);

        })
    })
});