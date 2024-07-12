import { useTranslations } from 'next-intl';
import ContentLayout from '@/components/ContentLayout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Hesta Home',
  description: 'hhhome',
};

function CaseDetail() {
  const t = useTranslations();
  // const {} =useRouter()
  return (
    <>
      <div className="h-[200px] w-full bg-slate-300"></div>
      <div className="mx-[100px] flex justify-between">
        <div className="-mt-[100px] mr-16 flex h-[400px] min-w-[250px] flex-col justify-between bg-[#eee] pb-6 pl-8 pr-6 pt-20">
          <h3>案例1</h3>
          <p>地点</p>
          <p>greewich</p>
          <span>返回案例</span>
          <div className="divider"></div>
          <Link href={`/case_detail?id=${2}`}>下一篇</Link>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl">挑战</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="my-12 h-[400px] w-full bg-slate-300"></div>
          <div>
            <h2 className="text-2xl">解决方案</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by English versions from
              the 1914 translation by H. Rackham.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by English versions from
              the 1914 translation by H. Rackham.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by English versions from
              the 1914 translation by H. Rackham.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by English versions from
              the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseDetail;
