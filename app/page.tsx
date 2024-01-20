import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import Image from "next/image";
import Coffee from "../public/images/cofee.jpg";
import { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

export default async function Home() {
  const session =await getServerSession(authOptions)
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span> }</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* Lazy loading */}
      {/* <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />} */}
      <Image
        src="https://bit.ly/react-cover"
        alt="Coffee image"
        width={800}
        height={220}
        sizes="(max-width:480px) 100vw,(max-width:768px) 50vw,33vw"
        className="object-cover"
        quality={100}
        priority
      />
    </main>
  );
}

// export async function generateMetadata():Promise<Metadata>{
//   const product = await fetch('')
//   return {
//     title:'product.title',
//     description:'...'
//   }
// }

// export const metadata:Metadata = {
//   title:'..'
// }
