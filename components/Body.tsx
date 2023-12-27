import Head from 'next/head'
import React from 'react'

export default function Body(props) {
    return (
        <main>
            <Head>
                <title className="notranslate">{props.title + ' - Rose'}</title>
            </Head> {props.children} 
            </main>
    )
} 
