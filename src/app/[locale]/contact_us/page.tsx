'use client';
// pages/contact.js
import React, { useRef, useState } from 'react';

import { Alert, Button } from '@material-tailwind/react';
import Image from 'next/image';
import { CDN } from '@/constants';

const ContactForm = () => {
  const submit = () => {
    if (isChecked) {
      setOpen(true);
      setsubmitMsg('提交成功');
    } else {
      setOpen(true);
      setsubmitMsg('请同意隐私政策');
    }
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const agreeRef = useRef(null);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [open, setOpen] = useState(false);
  const [submitMsg, setsubmitMsg] = useState('');

  return (
    <div className="flex flex-col items-center">
      <Alert
        open={open}
        onClose={() => setOpen(false)}
        className="absolute left-[50%] top-[100px] -ml-[450px] w-[900px]"
      >
        <p className="font-harmony text-[#fff]">{submitMsg}</p>
      </Alert>
      <Image
        src={`${CDN}/imgs/bg_sayhi.png`}
        className="h-[600px] w-[1150px]"
        width={4000}
        height={4000}
        alt=""
      />
      <div className="-mt-[290px] flex min-h-[900px] w-[100vw] min-w-[1440px] justify-center rounded-t-[100px] bg-[#F9FAFC]">
        <div className="w-[900px] pb-[200px]">
          <div className="form mt-[90px]">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <input
                type="text"
                className="h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
                placeholder="您的姓名"
              />
              <input
                type="text"
                className="h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
                placeholder="电话"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
                placeholder="所在城市"
              />
              <input
                type="text"
                className="h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
                placeholder="地产类别"
              />
            </div>

            <input
              type="text"
              className="mt-4 h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
              placeholder="地产类型"
            />

            <div className="mt-8 flex items-center">
              <input
                ref={agreeRef}
                type="checkbox"
                name=""
                id=""
                className="op-input mr-2 rounded-none border border-[#383B43]"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="mt-1 inline-block cursor-pointer font-harmony text-[14px]">
                悉瞰科技尊重您的隐私并致力于保护您的个人信息。勾选方框同意并提交即表示您已阅读并同意隐私政策。
              </span>
            </div>
          </div>

          <div className="mt-[50px] flex justify-center">
            <div
              className={`flex h-[54px] w-[154px] cursor-pointer items-center bg-[url("/imgs/button.png")] bg-cover bg-center bg-no-repeat hover:bg-[url("/imgs/button_active.png")]`}
              onClick={submit}
            >
              <span className="-ml-1 -mt-1 w-full text-center font-harmony text-[16px] font-thin hover:text-[#fff]">
                立即提交
              </span>
            </div>
          </div>
          <div className="my-[80px] w-full border-b border-[#383b4358]"></div>
          <h1 className="font-harmony text-[30px] font-bold">可以通过以下方式联系我们</h1>
          <div className="mt-10 flex w-full justify-between">
            {/* <div className="h-[263px] w-[280px] rounded-md border border-white bg-[#fff] px-[40px] py-[30px]">
              <Image
                src="/imgs/icon_contact.png"
                width={140}
                height={140}
                className="h-[70px] w-[70px]"
                alt=""
              />

              <h4 className="mt-[52px] font-harmony font-bold">联系电话</h4>
              <p className="mt-[10px] font-harmony font-thin">400-0913-777</p>
            </div> */}
            <div className="h-[263px] w-[280px] rounded-md border border-white bg-[#fff] px-[40px] py-[30px]">
              <Image
                src={`${CDN}/imgs/icon_email.png`}
                width={140}
                height={140}
                className="h-[70px] w-[70px]"
                alt=""
              />

              <h4 className="mt-[52px] font-harmony font-bold">邮箱</h4>
              <p className="mt-[10px] font-harmony font-thin">contact@xikan.tech</p>
            </div>
            <div className="h-[263px] w-[280px] rounded-md border border-white bg-[#fff] px-[40px] py-[30px]">
              <Image
                src={`${CDN}/imgs/icon_address.png`}
                width={140}
                height={140}
                className="h-[70px] w-[70px]"
                alt=""
              />

              <h4 className="mt-[52px] font-harmony font-bold">地址</h4>
              <p className="mt-[10px] font-harmony font-thin">
                北京市朝阳区东坝乡半截塔村53号60幢1层6026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
