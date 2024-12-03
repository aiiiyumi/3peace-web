// src/pages/page2.js
import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import Layout from "../components/layout"
import CompanyCom from '../components/company'
import "../components/layout.scss"
import "../components/service/service.scss"


export default function StaticService() {
    return (
      <Layout>
        <div
          className="view-wrap"
        >
          <div className="container-blog text-primary">
          <h1 className="text-6xl font-bold text-neutral-700">Business details</h1>
            <h2 className="text-primary contentTitle">事業内容</h2>
            <AnchorLink to="#btob" className="serviceLink" title="BtoB向けの営業支援サービス" />
            <AnchorLink to="#country" className="serviceLink" title="地方自治体向けの営業支援サービス" />
            <div className="ContentInner">
              {/* BtoB向けの営業支援サービス */}
              <div id="btob" className="serviceBlock">
                <div className="tittleTop">
                  BtoB向けの営業支援サービス
                </div>
                <p className="text">
                  当社は、地方自治体向けの営業支援やテレマーケティングを通じて、お客様の業務をサポートしています。地域社会における課題解決や新たな取り組みの実現に向けて、訴求内容の立案からアポイントメントの獲得まで、一貫したサポートを提供しています。<br />特に、地方自治体の開拓に特化した営業支援を行っており、地域のニーズや課題に合わせたソリューションを提供しています。また、新規事業や新サービスのテストマーケティングを担当する「ゼロワンサービス」も提供しており、新規リストの作成や展示会のサンキューコールなど、様々な面でお客様のビジネスを支援しています。<br />地域社会の発展や住民の福祉向上に貢献するために、私たちはお客様とともに積極的に取り組んでいます。詳細については、お気軽にお問い合わせください。
                </p>
                <div className="subTittle">
                  サービスの特徴
                </div>
                <p className="text">
                  <IoCheckmarkSharp />社員1名のコスト以下の金額で対応可能!ディレクター+コールスタッフ(社員)の複数名体制<br />
                  <IoCheckmarkSharp />週1回の打ち合わせの実施で PDCAを回していき貴社オリジナルの勝ちパターンを構築します<br />
                  <IoCheckmarkSharp />リスト作成からスクリプト作成、実行まで対応するため、商談対応のみに集中できます
                </p>
                <div className="subTittle">
                  事例
                </div>
                <p className="textStrong">
                  アポ率3%代へ
                </p>
                <p className="text">
                  コンテンツ制作と SNS代行の案件を受注したいというニーズに対して、 弊社がアポイントの獲得を支援しました。
                </p>
                <div className="subTittle">
                  料金
                </div>
                <p className="text">
                  基本の料金体系は「コール費用」+「年間サポート費用」です。 ご要望に応じてカスタマイズしたプランもご提案できますので、詳しくはお問い合わせください。
                </p>
                <div className="flex flex-col priceFlex md:flex-row">
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">費用</div>
                  </div>
                  <div className="flex-1 self-auto item text-2xl font-bold tracking-wider leading-10 text-center">1時間　3,750円<br /><span className="text-sm">または</span><br />1リスト<span className="text-sm">(3コール制)</span>　450円</div>
                </div>
                <div className="priceWrap">
                  <div className="pricePlus"><FaPlus /></div>
                </div>
                <div className="flex flex-col priceFlex md:flex-row">
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">年間サポート費用</div>
                  </div>
                  <div className="flex-1 self-auto item text-2xl font-bold tracking-wider leading-10 text-center">
                    <div className="priceTableUlWrap">年間　35万円<span className="text-sm">(税抜)</span></div>
                    <ul className="text-sm">
                      <li>キックオフ実施</li>
                      <li>週1回MTG</li>
                      <li>リスト制作</li>
                      <li>スクリプト制作</li>
                    </ul>
                  </div>
                </div>
                <div className="Link-wrap linkStart">
                  <div className="dlButton">BtoB向けサービス資料をダウンロードする<LuDownloadCloud /></div>
                </div>
              </div>

              {/* BtoB向けの営業支援サービス */}


              {/* 地方自治体向けの営業支援サービス */}
              <div id="country" className="serviceBlock">
                <div className="tittleTop">
                  自治体向け支援サービス
                </div>
                <p className="text">
                  訴求内容の立案からアポイントメントの獲得まで、地方自治体向けのサービスの確立を支援します。弊社では、リスト数の10%に相当するアポイントメントの獲得を保証しています。自治体アタックリストの作成やトークスクリプトの作成を行い、最終的な決定が下されるまで、地方自治体に対して徹底的にアプローチいたします。
                </p>
                <div className="subTittle">
                  solution
                </div>
                <p className="text">
                  自治体アポ獲得にかかる作業をまるっと任せることができ、貴社は自治体担当者とのコミュニケーションに集中することができます。
                </p>
                <p className="text">
                  <IoCheckmarkSharp />リスト数の10%アポ保証で安心できる<br />
                  <IoCheckmarkSharp />自治体営業経験が豊富でターゲット部署特定できる<br />
                  <IoCheckmarkSharp />自治体との共同リリース機会の早期創出ができる
                </p>
                <div className="subTittle">
                  事例
                </div>
                <p className="textStrong">
                  弊社で900商談を創出し、業界No1へ
                </p>
                <p className="text">
                  教育業界向け商材を全国の自治体に広めたいというニーズに対して、弊社がアポイント獲得を支援しました。
                </p>
                <div className="subTittle">
                  料金
                </div>
                <p className="text">
                基本の料金体系は「自治体あたりのコール費用」+「年間サポート費用」です。 ご要望に応じてカスタマイズしたプランもご提案できます。詳しくはお問い合わせください。
                </p>
                <div className="flex flex-col priceFlex md:flex-row">
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">費用</div>
                  </div>
                  <div className="flex-1 self-auto item text-2xl font-bold tracking-wider leading-10 text-center">自治体　1,500円<span className="text-sm">(税抜)</span></div>
                </div>
                <div className="priceWrap">
                  <div className="pricePlus"><FaPlus /></div>
                </div>
                <div className="flex flex-col priceFlex md:flex-row">
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">年間サポート費用</div>
                  </div>
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">年間　35万円<span className="text-sm">(税抜)</span></div>
                  </div>
                </div>

                <div className="subTittle">
                  オプションサービス
                </div>

                <div className="flex flex-col priceFlex md:flex-row">
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">地方新聞向けプレスリリース</div>
                  </div>
                  <div className="flex-1 self-auto item text-2xl font-bold tracking-wider leading-10 text-center">10万円<span className="text-sm">(税抜)</span></div>
                </div>
                <div className="priceWrap">
                  <div className="pricePlus"><FaPlus /></div>
                </div>
                <div className="flex flex-col priceFlex md:flex-row">
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">市長・自治体職員と<br />座談会設定</div>
                  </div>
                  <div className="flex-1 self-stretch item1 text-2xl font-bold tracking-wider">
                    <div className="text-center grow">50万円<span className="text-sm">(税抜)</span></div>
                  </div>
                </div>
                <div className="Link-wrap linkStart">
                  <div className="dlButton">自治体向けサービス資料をダウンロードする<LuDownloadCloud /></div>
                </div>
              </div>

              {/* 地方自治体向けの営業支援サービス */}
            </div>
          </div>
          <div className="Link-wrap linkStart">
            <Link
              to={"/"}
              className="Link-button"
            >
                <IoArrowBackSharp />戻る
            </Link>
          </div>
          <CompanyCom />
        </div>
      </Layout>
    )
}
