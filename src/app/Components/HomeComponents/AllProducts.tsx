"use client"
import { Product } from '@/app/Types/SingleProduct';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
interface DataFetchProps {
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const DataFecth = ({ setQuantity }: DataFetchProps) => {

    const [result, setResult] = useState<Product[]>([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
                if (!res.ok) {
                    throw new Error("Response is not found")
                }
                const result = await res.json();
                setResult(result)
                setQuantity(result.length)
            }
            catch (error) {
                console.error("Product fetching error:", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [setQuantity])
    if (loading) {
        return <p>পণ্যের তথ্য লোড হচ্ছে...</p>;
    }


    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {result.map((item: Product) => (
                <Link key={item.id} href={`/products/${item.id}`}>
                    <div

                        className="rounded-xl border border-gray-200 bg-white/80 p-3 sm:p-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F0F5F0] text-xl">
                                {item.image}
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {item.nameBn}
                                </h3>
                                <p className="text-xs text-gray-500">প্রতি কেজি</p>
                            </div>
                        </div>

                        {/* Today's price and price change */}
                        <div className="mt-4 flex items-end justify-between gap-2">
                            <div>
                                <p className="text-xs text-gray-500">আজকের দাম</p>
                                <p className="text-base font-bold text-gray-900">
                                    {item.today} <span className="text-xs font-normal">টাকা</span>
                                </p>
                            </div>

                            <div className="shrink-0 rounded-full px-2 py-1 text-[10px] font-medium">
                                {item.change.dir === "up" ? (
                                    <span className='text-red-500'>▲ {Math.abs(item.change.pct)}%</span>
                                ) : item.change.dir === "down" ? (
                                    <span className='text-green-500'>▼ {Math.abs(item.change.pct)}%</span>
                                ) : (
                                    <span className='text-yellow-500'>- {Math.abs(item.change.pct)}%</span>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    )
}


const AllProducts = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="mx-auto w-full max-w-7xl rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:p-6 md:p-8 lg:px-10">
            <div className="flex flex-col">
                <div className="mb-4 flex items-sart gap-2 flex-col ">
                    <h2 className="font-bold">সব পণ্য</h2>
                    <p>মোট {quantity}টি পণ্য দেখানো হচ্ছে</p>
                </div>

                <DataFecth setQuantity={setQuantity} />
            </div>
        </div>
    );
};

export default AllProducts;