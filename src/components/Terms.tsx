'use client';

import { usePopupContext } from '@/context/PopupContext';
import SlideUpModal from './Basic/SlideUpModal';

function Terms({ showing }: any) {
  const { state, dispatch }: any = usePopupContext();
  const close = () => {
    dispatch({ type: 'showTerms', payload: false });
  };
  return (
    <SlideUpModal close={close} showing={showing}>
      <div>
        <h1 className="mb-[69px] flex font-harmony text-[40px] font-black">
          悉瞰公司网页及问询提交隐私政策
        </h1>
        <div className="h-[45vh] overflow-y-auto font-harmony">
          <p>
            欢迎您使用悉瞰科技网站（以下称为“本网站”或“服务”）。请在使用本网站之前仔细阅读并理解本用户协议（以下称为“协议”）。如果您不同意本协议的任何条款，请停止使用本网站。
          </p>
          <h5 className="font-black">1. 服务概述</h5>
          <p>
            本网站旨在为用户提供智能家居产品信息、购买选项、技术支持和相关服务。您理解并同意，本网站的部分功能和服务可能需要您创建帐户并登录。
          </p>
          <h5 className="font-black">2. 帐户和隐私</h5>
          <p>
            您有责任保护您的帐户和密码的机密性，您将对在您的帐户下发生的所有活动负有责任。我们将根据我们的隐私政策处理您的个人信息。请在使用本网站之前仔细阅读我们的隐私政策。
          </p>
          <h5 className="font-black">3. 使用规则</h5>
          <p>
            您同意不使用本网站进行任何非法、欺诈、侵犯他人权利或违反适用法律法规的活动。您同意不干扰、破坏或损害本网站的正常运行，包括但不限于恶意软件、病毒、滥用或未经授权的访问。
          </p>
          <h5 className="font-black">4. 知识产权</h5>
          <p>
            本网站上的所有内容，包括但不限于文本、图形、图像、标志、音频和视频，以及相关的软件和技术，均受知识产权法律保护。您不得在未经授权的情况下复制、修改、分发、出售、出租、转让、公开展示或以其他方式利用本网站上的内容。
          </p>
          <h5 className="font-black">5. 责任限制</h5>
          <p>
            本网站以“现状”提供，不提供任何明示或暗示的担保。我们不对因使用本网站而导致的任何直接或间接损失承担责任，包括但不限于财产损失、数据损失、业务中断或利润损失。
          </p>
          <h5 className="font-black">6. 服务变更和终止</h5>
          <p>
            我们保留随时更改、暂停或终止本网站的权利。我们有权因任何违反本协议的行为，终止或限制您对本网站的访问。
          </p>
          <h5 className="font-black">7. 协议的修改</h5>
          <p>
            我们保留随时修改本协议的权利。修改后的协议将在本网站上发布，您继续使用本网站即表示您接受修改后的协议。
          </p>
          <h5 className="font-black">8. 适用法律和争议解决</h5>
          <p>
            本协议受适用法律管辖。任何因本协议引起的争议应通过友好协商解决，如果协商无果，将提交至有管辖权的法院进行解决。
          </p>

          <h5 className="font-black">9. 联系我们 </h5>
          <p> 如果您对本协议或服务有任何疑问或意见，请与我们联系。</p>
          <p>感谢您的阅读和理解。如果您同意并接受以上条款和条件，请继续使用我们的服务。</p>
        </div>
      </div>
    </SlideUpModal>
  );
}

export default Terms;
