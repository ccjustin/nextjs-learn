// landing page

import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>hi world</h1>
      
      {/* <a href='/users'>Users</a> */}
      <Link href='/users'></Link>
      <ProductCard></ProductCard>
      </main>
      )
}
