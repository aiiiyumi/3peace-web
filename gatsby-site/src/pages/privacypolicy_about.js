import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { IoArrowBackSharp } from "react-icons/io5";
import "../components/service/service.scss"
import "../components/layout.scss"

export default function PrivacyAbout() {
  return (
    <Layout>
      <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
          className="view-wrap"
      >
        <div className="text-primary">個人情報の取り扱いについて</div>
        <div class="privacy-in">
              <h2>個人情報の取り扱いについて</h2>
              <ol class="privacy-list">
                <li class="mb-2"><span class="text-bold">利用目的ついて</span><br/>当社は、以下の目的の達成に必要な範囲内において個人情報を利用いたします。
                  <table class="privacy-chart">
                    <tbody>
                      <tr>
                        <th class="nowrap">個人情報の種類</th>
                        <th>個人情報の利用目的</th>
                        <th class="nowrap">開示対象</th>
                      </tr>
                      <tr>
                        <td>受託業務のため顧客から提供された個人情報</td>
                        <td>
                          <ol class="privacy-list-inner">
                            <li class="nowrap">データ入力業務実施のため</li>
                            <li>営業代行業務実施のため</li>
                            <li>その他受託業務履行のため</li>
                          </ol>
                        </td>
                        <td class="nowrap text-center">非対象</td>
                      </tr>
                      <tr>
                        <td class="nowrap">お問い合わせ情報</td>
                        <td>
                          <ol class="privacy-list-inner">
                            <li class="nowrap">お問い合わせへの対応のため</li>
                          </ol>
                        </td>
                        <td class="nowrap text-center">対象</td>
                      </tr>
                      <tr>
                        <td class="nowrap">従業者情報</td>
                        <td>
                          <ol class="privacy-list-inner">
                            <li class="nowrap">当社業務実施のため</li>
                            <li>人事労務管理及び健康管理のため</li>
                            <li>社会保険その他各種手続きのため</li>
                            <li>給与支払等の社内事務処理のため</li>
                            <li>その他社内サービスの提供のため</li>
                          </ol>
                        </td>
                        <td class="nowrap text-center">対象</td>
                      </tr>
                      <tr>
                        <td>プライバシーマークの運用に関する情報</td>
                        <td>
                          <ol class="privacy-list-inner">
                            <li class="nowrap">プライバシーマークの運用管理のため</li>
                          </ol>
                        </td>
                        <td class="nowrap text-center">対象</td>
                      </tr>
                    </tbody>
                  </table>

                </li>
                <li class="mb-2"><span class="text-bold">個人情報の第三者への提供</span><br/>
                当社は、本人の同意を得ずに個人情報を第三者に提供することはありません。
                </li>
                <li class="mb-2"><span class="text-bold">個人情報を取り扱う業務の委託</span><br/>
                当社は、個人情報を取り扱う業務のすべてまたは一部を第三者に委託することがあります。<br/>この場合は、当社の委託先管理規定に基づき厳正な調査を行い、委託先を決定します。<br/>また、委託後も個人情報の安全管理が遂行されるよう定期的に管理・検討いたします。
                </li>
                <li class="mb-2"><span class="text-bold">保有個人データ又は三者提供記録の開示等の請求、苦情受付について</span>
                  <ol class="privacy-list-inner">
                    <li>当社は保有する保有個人データの利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止（以下、”開示等”という）及び、第三者提供記録の開示の依頼があった場合、遅滞なく対応いたします。</li>
                    <li>請求手続きの詳細につきましては、以下の問合せ窓口まで電子メールにてお問い合わせください。<br/>ご本人及び代理人の方のご本人確認をさせていただいたうえで、対応させていただいております。<br/>なお、ご請求にあたりまして、当社規定の料金が発生する場合がございますので、ご了承ください。</li>
                    <li>個人情報保護に関する苦情やお問い合わせは、以下の問合せ窓口に電子メールにてお願いいたします。</li>
                  </ol>

                </li>
                <li class="mb-2"><span class="text-bold">個人データの安全管理のために講じた措置について</span><br/>
                  <ol class="privacy-list-inner">
                    <li>個人情報保護方針の策定<br/>個人情報の適正な取扱いの確保のため、個人情報保護方針を策定します。</li>
                    <li>個人データの取扱いに係る規程の整備<br/>取扱いの各局面（個人情報の取得・入力、移送・送信、利用・加工、保管・バックアップ、消去・廃棄）において、取扱方法、責任者・担当者およびその任務等を定めた「個人情報保護規程」を策定しています。</li>
                    <li>組織的安全管理措置<br/>個人情報の取扱いに関する責任者を設置するとともに、個人情報を取り扱う従業者および個人情報の範囲を明確にしています。<br/>個人データの取扱状況について、定期的に日常業務での個人情報の取扱いの点検を実施するとともに、内部監査計画書に基づき計画的に内部監査を実施しています。</li>
                    <li>人的安全管理措置<br/>個人データの取扱いに関する留意事項について、従業者に定期的な研修を実施しています。<br/>また、従業者の入社時及び退職時に「機密情報及び個人情報の守秘に関する誓約書」を提出させています。</li>
                    <li>物理的安全管理措置<br/>個人情報を取扱う区域において、従業者の入退室管理および持ち込む機器等の制限を行うとともに、権限を有しない者による個人情報の閲覧を防止する措置を実施しています。</li>
                    <li>技術的安全管理措置<br/>アクセス制御を実施して、担当者および取り扱う個人情報等の範囲を限定しています。</li>
                    <li>外的環境の把握<br/>個人情報を外国で取り扱う場合において、当該国の個人情報の保護に関する制度を把握にした上で、適切な安全管理措置を実施します。</li>
                  </ol>
                </li>
                <li class="mb-2"><span class="text-bold">個人情報の取扱いに関する問合せ窓口について</span><br/>
                問い合わせ窓口責任者　堤　信弘<br/>Mail:<a href="mailto:info@3peace-jpn.com">info@3peace-jpn.com</a>
                </li>
              </ol>
              <div class="privacy-sign-wrpper">
                <ul class="privacy-sign">
                  <li>文書番号　PM-M04</li>
                  <li>改訂版数　1</li>
                  <li>最終改定日：2023年6月8日</li>
                  <li>株式会社スリーピース</li>
                  <li>個人情報保護管理者　代表取締役　堤　信弘</li>
                </ul>
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
      </div>
    </Layout>
  )
}
