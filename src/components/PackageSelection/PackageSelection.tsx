import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const PackageSelection: React.FC = () => {
  const searchParams = useSearchParams();

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-6 -mt-4">
        {/* Starter Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#cdcdcd] w-[320px] flex flex-col order-3 lg:order-1">
          <div className="relative w-full h-[273px] overflow-hidden bg-white aspect-square">
            <Image
              src="/contentimages/StarterMobileU.webp"
              alt="Starter Package"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="pt-0 px-4 pb-4 flex-grow flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[40px] font-bold text-black">$79.97</span>
              <span className="text-[#ff0000] text-lg font-bold">+ S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">You Saved $60</div>
            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnshblkgbbswtbonus/starter-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultimate Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-[3px] border-[#a3a0a0] w-[320px] flex flex-col order-1 lg:order-2">
          <div className="relative w-full h-[440px] overflow-hidden bg-[#e8e8e8] flex items-start">
            <Image
              src="/contentimages/AdvancedMobileU2.webp"
              alt="Ultimate Package"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="p-4 flex-grow flex flex-col bg-[#e8e8e8]">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[40px] font-bold text-black">$199.97</span>
              <span className="text-[#ff0000] text-lg font-bold">+ Free S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">You Saved $330</div>

            <div className="mt-auto">
              <a
                href={getCheckoutUrl(
                  'https://secure.vnsh.com/vnshblkgbbswtbonus/advanced-checkout'
                )}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#cdcdcd] w-[320px] flex flex-col order-2">
          <div className="relative w-full h-[300px] overflow-hidden bg-white">
            <Image
              src="/contentimages/EnhancedMobileU2.webp"
              alt="Enhanced Package"
              fill
              className=""
              priority
            />
          </div>

          <div className="pt-4 px-4 pb-4 flex-grow flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[40px] font-bold text-black">$149.97</span>
              <span className="text-[#ff0000] text-lg font-bold">+ Free S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">You Saved $120</div>
            <div className="mt-auto">
              <a
                href={getCheckoutUrl(
                  'https://secure.vnsh.com/vnshblkgbbswtbonus/enhanced-checkout'
                )}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;
