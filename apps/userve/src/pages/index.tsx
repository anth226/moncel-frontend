import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import Section from 'src/components/core/Section';
import StatePicker from 'src/components/core/StatePicker';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <div>
      <Head />
      <Layout>
        <main style={pageStyles}>
          <Section className="grid grid-cols-2 grid-rows-3 items-center">
            <h1 className="col-start-1 col-span-1 row-start-1 text-5xl font-bold text-slate-700">Get your certificate in hours not days.</h1>
            <p className="col-start-1 col-span-1 row-start-2 text-lg text-slate-400">Flexible courses for alcohol servers and food handlers, with no prior experience required.</p>
            <div className="col-start-1 col-span-1 row-start-3">
              <StatePicker />
            </div>
            <div className="col-start-2 row-span-3">
              <StaticImage src="../images/usx_hero_home.png" alt="usx logo" />
            </div>
          </Section>
        </main>
      </Layout>
    </div>
  )
}

export default IndexPage
