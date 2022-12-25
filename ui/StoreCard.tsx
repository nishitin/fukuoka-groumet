import Image from 'next/image';
import React from 'react';

export const StoreCard = ({ data }: any) => {
  return (
    <div className="w-full bg-white">
      {data.results.shop.map((shop: any) => {
        return (
          <div key={shop.id} className="w-full mx-2 my-4 place-items-center gap-5">
            <div className="relative overflow-hidden shadow-lg flex">
              <Image
                src={shop.photo.pc.l}
                width="208"
                height="50"
                alt="shop.image"
                className="flex justify-center bg-blue-200"
              />
              <div className="p-4 h-52">
                <h1 className="mb text-lg font-bold">{shop.name}</h1>
                <p className="text-base text-gray-400">{shop.address}</p>
                <div className="space-x-2 leading-3">
                  <p className="rounded-md bg-gray-200 py-1 px-2 text-xs font-light text-gray-500">
                    最寄駅：{shop.station_name}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="space-y-1">
                    <div className="text-xs"></div>
                    <div className="text-xs text-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
