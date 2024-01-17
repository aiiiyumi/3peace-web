import React from "react"
import { Link } from "gatsby"
import { IoArrowBackSharp } from "react-icons/io5";
import Layout from "../components/layout"
import CompanyCom from '../components/company'
import "../components/service/service.scss"
import "../components/layout.scss"

export default function PrivacyPage() {
  return (
    <Layout>
      <div
          className="view-wrap"
      >
        <div className="container-blog text-primary">
          <h2 className="text-primary contentTitle">個人情報保護方針</h2>
          <div className="ContentInner">
            <p>私たちは、お客様を始めとする利害関係者の情報の保護及び事故の予防について重大な社会的責任を認識し、個人情報保護のための個人情報保護マネジメントシステムを構築し、実施していきます。</p>
            <p>また、本人のニーズ、IT技術の最新動向に着目し、個人情報保護マネジメントシステムの継続的な改善を図ります。</p>
            <p>個人情報保護マネジメントシステムの確立、実施、点検及び改善のため次の事項を行います。</p>
            <ol>
              <li class="mb-2">事業の内容及び規模を考慮して適切な個人情報の取得、利用及び提供を行います。また、取得した個人情報については目的外の利用を行いません。また、そのための措置を講じます。</li>
              <li class="mb-2">個人情報に関する事業上の要求事項及び法的又は国が定める指針、その他の規範・規制要求事項を遵守します。</li>
              <li class="mb-2">個人情報の漏えい、滅失または、き損などの防止及び是正を図ります。</li>
              <li class="mb-2">個人情報に関する苦情及び相談に対して、窓口を定め対応します。</li>
              <li class="mb-2">個人情報保護マネジメントシステムを確立し、維持するために必要な組織を整備します。また、個人情報保護マネジメントシステムの継続的改善を行います。</li>
            </ol>
            <div>
              <ul>
                <li>最終改定日：2021年2月1日</li>
                <li>株式会社スリーピース</li>
                <li>個人情報保護管理者　代表取締役　堤　信弘</li>
              </ul>
              <p>【個人情報保護方針の内容についての問い合わせ先】<br/>TEL：03-6909-5960<br/>問い合わせ窓口責任者　堤　信弘　Mail:<a href="mailto:info@3peace-jpn.com">info@3peace-jpn.com</a></p>
            </div>

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
