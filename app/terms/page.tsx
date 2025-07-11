import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/icon.png"
                alt="Plantoto Icon"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Plantoto</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>トップページに戻る</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                この利用規約（以下，「本規約」といいます。）は，Plantoto（以下，「当運営者」といいます。）が提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。利用するユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第1条（適用）</h2>
              <p className="text-gray-700 mb-4">
                本規約は，ユーザーと当運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第2条（登録情報・パスワードの管理）</h2>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li className="mb-2">ユーザーは，自己の責任において，本サービスの登録情報およびパスワードを適切に管理するものとします。</li>
                <li>ユーザーは，いかなる場合にも，登録情報およびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第3条（禁止事項）</h2>
              <p className="text-gray-700 mb-4">
                ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当運営者のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当運営者のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当運営者が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第4条（本サービスの提供の停止等）</h2>
              <p className="text-gray-700 mb-4">
                当運営者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>Apple Store，Google Playの仕様変更等によりサービスの提供が困難となった場合</li>
                <li>その他，当運営者が本サービスの提供が困難と判断した場合</li>
              </ul>
              <p className="text-gray-700 mb-4">
                当運営者は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第5条（利用制限および登録抹消）</h2>
              <p className="text-gray-700 mb-4">
                当運営者は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，投稿データを削除し，ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>当運営者からの連絡に対し，一定期間返答がない場合</li>
                <li>本サービスについて，最終の利用から一定期間利用がない場合</li>
                <li>その他，当運営者が本サービスの利用を適当でないと判断した場合</li>
              </ul>
              <p className="text-gray-700 mb-4">
                当運営者は，本条に基づき当運営者が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第6条（保証の否認および免責事項）</h2>
              <p className="text-gray-700 mb-4">
                当運営者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>
              <p className="text-gray-700 mb-4">
                当運営者は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
              </p>
              <p className="text-gray-700 mb-4">
                当運営者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第7条（サービス内容の変更等）</h2>
              <p className="text-gray-700 mb-4">
                当運営者は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第8条（利用規約の変更）</h2>
              <p className="text-gray-700 mb-4">
                当運営者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第9条（個人情報の取扱い）</h2>
              <p className="text-gray-700 mb-4">
                当運営者は，本サービスの利用によって取得する個人情報については，当運営者「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">第10条（準拠法・裁判管轄）</h2>
              <p className="text-gray-700 mb-4">
                本規約の解釈にあたっては，日本法を準拠法とします。本サービスに関して紛争が生じた場合には，当運営者の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}