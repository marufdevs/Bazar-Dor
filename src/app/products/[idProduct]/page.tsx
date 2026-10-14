import FallBack from '@/app/Components/FallBack';
import ProductContent from '@/app/Components/SingleProductComponents/ProductContent';
import Image from 'next/image';
import React, { Suspense } from 'react';
interface PageProps {
    params: Promise<{
        idProduct: string;
    }>;
}


const ProductDetailesPage = async ({ params }: PageProps) => {



    return (
        <div>
            <Suspense fallback={<FallBack />}>
                <ProductContent params={params}></ProductContent>
            </Suspense>
        </div>
    );
};

export default ProductDetailesPage;