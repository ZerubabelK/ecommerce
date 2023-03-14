import StarRating from "@/components/common/StarRating";
import { fetchProductById } from "@/store/slices/product";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);
  console.log(product);
  return (
    <div className="h-full">
      <div className="lg:grid lg:grid-cols-12 flex flex-wrap justify-center max-w-screen-xl mx-auto">
        <div className="lg:h-[70vh] h-[60vh] col-span-4">
          <img src={product.image} className="h-full" alt="" />
        </div>
        <div className="col-span-8">
          <h1 className="text-xl">{product.title}</h1>
          <div>
            <p>{product.description}</p>
            <StarRating rating={product.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
