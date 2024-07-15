'use client';
// pages/contact.js
import React, { useRef, useState } from 'react';
import { Alert } from '@material-tailwind/react';
import Image from 'next/image';
import { CDN } from '@/constants';

import Select, { StylesConfig } from 'react-select';

const colourStyles: StylesConfig<any> = {
  control: (styles) => ({
    ...styles,
    height: '79px',
    width: '100%',
    border: '1px solid #383b43',
    backgroundColor: 'white',
    // paddingLeft: '1.5rem',
    // paddingRight: '1.5rem',
    fontFamily: 'harmony',
    fontSize: '16px',
    color: '#383b43',
    borderRadius: 0,
    outline: 'none',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
    };
  },
  menu: (styles) => ({
    ...styles,
    maxWidth: '177px',
    border: '1px solid #fff',
    marginTop: 0,
  }),
  input: (styles) => ({ ...styles, background: '' }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles, background: '' }),
  indicatorsContainer: (styles) => ({
    ...styles,
  }),
  indicatorSeparator: (styles) => ({
    display: 'none',
  }),
};

const optionsPropertyType = [
  { value: '商业地产', label: '商业地产' },
  { value: '住宅', label: '住宅' },
];

const optionsPropertyCate = [
  { value: '办公楼', label: '办公楼' },
  { value: '酒店', label: '酒店' },
  { value: '商场', label: '商场' },
];

const optionsResidentialType = [
  { value: '平层', label: '平层' },
  { value: '别墅', label: '别墅' },
];
const optionsRenovationStage = [
  { value: '前装', label: '前装' },
  { value: '后装', label: '后装' },
];

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

  const [propertyType, setpropertyType] = useState('');
  const [propertyCate, setpropertyCate] = useState('');

  const [residentialType, setResidentialType] = useState('');
  const [renovationStage, setRenovationStage] = useState('');

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
              {/* <input
                type="text"
                className="h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
                placeholder="地产类别"
              /> */}
              <Select
                options={optionsPropertyType}
                styles={colourStyles}
                placeholder="地产类别"
                value={propertyType}
                onChange={(option) => {
                  setpropertyType(option.value);
                  console.log('Selected option:', option);
                }}
              />
            </div>

            {propertyType === '住宅' && (
              <div className="mt-4">
                <input
                  type="text"
                  className="h-[79px] w-full border border-[#383b43] bg-white px-6 font-harmony text-[16px] text-[#383b43] outline-none"
                  placeholder="房屋面积"
                />

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Select
                    options={optionsResidentialType}
                    styles={colourStyles}
                    placeholder="房屋类型"
                    value={residentialType}
                    onChange={(option) => {
                      setResidentialType(option.value);
                      console.log('Selected option:', option);
                    }}
                  />
                  <Select
                    options={optionsRenovationStage}
                    styles={colourStyles}
                    placeholder="装修阶段"
                    value={renovationStage}
                    onChange={(option) => {
                      setRenovationStage(option.value);
                      console.log('Selected option:', option);
                    }}
                  />
                </div>
              </div>
            )}
            {propertyType !== '住宅' && (
              <div className="mt-4">
                <Select
                  options={optionsPropertyCate}
                  styles={colourStyles}
                  placeholder="地产类型"
                  value={propertyCate}
                  onChange={(option) => {
                    setpropertyCate(option.value);
                    console.log('Selected option:', option);
                  }}
                />
              </div>
            )}

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
          <div className="mt-10 flex w-full justify-evenly">
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
