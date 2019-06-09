import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

export default () => <div>
    <Layout>
        <SimpleHero>
            <Banner title="continue exploring" info="Eu et nulla id enim exercitation veniam sunt fugiat occaecat.">
                <Link to="/tours" className="btn-white">
                    Explore tours
                </Link>
            </Banner>
        </SimpleHero>
    </Layout>
    </div>
