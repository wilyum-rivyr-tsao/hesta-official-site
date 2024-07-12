import Image from 'next/image';
function Index(props: {
  className?: string;
  goto: Function;
  totalPage: number;
  page: number;
  direction?: Function;
  limitRange?: Boolean;
}) {
  const { className, goto, totalPage, page, direction = () => {}, limitRange = true } = props;
  console.log('page', page);
  const beforeGoto = (num: number) => {
    direction(num);
    if ((page + num > totalPage || page + num < 1) && limitRange) {
      return;
    }
    if (!limitRange) {
      if (page + num > totalPage) {
        goto(1);
        return;
      }
      if (page + num < 1) {
        goto(totalPage);
        return;
      }
    }
    goto(page + num);
  };
  return (
    <div
      className={`flex h-[40px] w-[80px] items-center justify-center rounded-full border border-[#cccdd3] ${className} `}
    >
      <div
        className="flex h-[40px] w-[50%] cursor-pointer items-center justify-center"
        onClick={() => {
          beforeGoto(-1);
        }}
      >
        {page <= 1 && limitRange ? (
          <Image width={20} src="/imgs/icon_prev_off.png" height={20} alt="" />
        ) : (
          <Image width={20} src="/imgs/icon_prev_on.png" height={20} alt="" />
        )}
      </div>
      <div className="h-[38px] border-r border-[#cccdd3]"></div>
      <div
        className="flex h-[40px] w-[50%] cursor-pointer items-center justify-center"
        onClick={() => {
          beforeGoto(1);
        }}
      >
        {page >= totalPage && limitRange ? (
          <Image width={20} src="/imgs/icon_next_off.png" height={20} alt="" />
        ) : (
          <Image width={20} src="/imgs/icon_next_on.png" height={20} alt="" />
        )}
      </div>
    </div>
  );
}

export default Index;
