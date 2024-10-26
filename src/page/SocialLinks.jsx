import React from "react";
import sda from "../assets/images/asda.jpg";

const SocialLinks = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-custom-rich-black p-6 rounded-md sm:max-w-[300px]">
                <img src={sda} alt="" className="w-[70px] h-[70px] rounded-full " />
                <div className="mt-6 text-center">
                    <h2 className="text-2xl">shlynavtiff.</h2>
                    <p className="">Quezon City, Philippines</p>
                </div>
                <div className="my-6">
                    <p className="text-xs sm:text-sm">"Front-end developer and avid reader."</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <button className="bg-custom-violet w-full px-[100px] py-2 rounded-md">
                            <a href="https://github.com/shlynavtiff" target="_blank" className="">
                                GitHub
                            </a>
                        </button>
                    </div>
                    <div>
                        <button className="bg-custom-violet w-full py-2 rounded-md">
                            <a href="https://www.frontendmentor.io/profile/shlynavtiff" target="_blank" >
                                Frontend Mentor
                            </a>
                        </button>
                    </div>
                    <div>
                        <button className="bg-custom-violet w-full py-2 rounded-md">
                            <a href="https://www.linkedin.com/in/shlynav-tiff/" target="_blank">
                                LinkedIn
                            </a>
                        </button>
                    </div>
                    <div>
                        <button className="bg-custom-violet w-full py-2 rounded-md">
                            <a href="https://x.com/cinnabunnnnnnnn"  target="_blank">

                                Twitter
                            </a>
                        </button>
                    </div>
                    <div>
                        <button className="bg-custom-violet w-full px-[50px] py-2  rounded-md">
                            <a href="https://www.instagram.com/shlynav.tiff/" target="_blank">
                                Instagram
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SocialLinks;
