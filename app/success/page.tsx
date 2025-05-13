"use client"
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";


export default function SuccessPage(){
    const {clearCart} = useCartStore();
    useEffect(()=>{
        clearCart()
    },[clearCart])
    return(
        <div className="container mx-auto py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Payment sucessfull</h1>
            <p className="mb-4">Thank you for your purchase. Your order is being Processed </p>
            <Link 
            href="/products"
            className="text-blue-50 hover:underline bg-amber-600"
            >Continue Shopping</Link>
        </div>
        
    )
}