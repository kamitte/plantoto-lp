import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>



          <div className="prose prose-gray max-w-none">

            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                Plantotoは、以下のとおり個人情報保護方針を定め、個人情報の保護を推進致します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 個人情報の管理</h2>
              <p className="text-gray-700 mb-4">
                お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 個人情報の利用目的</h2>
              <p className="text-gray-700 mb-4">
                本アプリのサービス提供のため、以下の情報を収集する場合があります。
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>アカウントID</li>
                <li>ユーザー作成のデータ</li>
                <li>ファイル/画像など</li>
                <li>クラッシュ情報</li>
                <li>利用状況の統計データ</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 個人情報の第三者への開示・提供の禁止</h2>
              <p className="text-gray-700 mb-4">
                お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>お客さまの同意がある場合</li>
                <li>お客さまが希望されるサービスを行なうために業務を委託する業者に対して開示する場合</li>
                <li>法令に基づき開示することが必要である場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 個人情報の安全対策</h2>
              <p className="text-gray-700 mb-4">
                個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. ご本人の照会</h2>
              <p className="text-gray-700 mb-4">
                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 法令、規範の遵守と見直し</h2>
              <p className="text-gray-700 mb-4">
                保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}