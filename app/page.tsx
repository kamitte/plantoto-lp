import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Mail,
  Calendar,
  Wrench,
  Camera,
} from "lucide-react"
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { PiHandTap } from "react-icons/pi";
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/icon.png"
                alt="Plantoto Icon"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Plantoto</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                機能
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                ユーザーの声
              </Link>
              <Link href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">
                ダウンロード
              </Link>
            </nav>

          </div>
        </div>
      </header >

      {/* Hero Section */}
      < section className="py-10 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  🌱 植物管理の決定版
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  植物の
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    お手入れ
                  </span>
                  と
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    成長
                  </span>
                  を記録
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Plantotoで植物の世話がもっと楽しく、もっと簡単に。水やりや肥料の記録、通知、成長記録まで、あなたの植物ライフをサポートします。
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <Link href="https://apps.apple.com/app/apple-store/id6670186137?pt=127291601&ct=lp&mt=8" target="_blank" rel="noopener noreferrer" className="store-button">
                  <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700">
                    <FaApple className="mr-2 w-5 h-5" />
                    App Store
                  </Button>
                </Link>

                <Link href="https://play.google.com/store/apps/details?id=com.esugo.plantCare" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50 bg-transparent store-button"
                  >
                    <FaGooglePlay className="mr-2 w-5 h-5" />
                    Google Play
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>無料</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>広告なし</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>オフライン対応</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/device.png"
                alt="Plantoto App Screenshot"
                width={300}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section >

      {/* Features Section */}
      < section id="features" className="py-20 bg-white" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Plantoto の機能</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              初心者からベテランまで、すべての植物愛好家が使いやすい機能を搭載
            </p>
          </div>

          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <PiHandTap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ワンタップで記録</h3>
                <p className="text-lg text-gray-600">
                  アプリを開いてすぐにお手入れを記録できます。トップ画面から前回実施日と次回予定日がひと目で分かります
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>前いつした？がすぐ分かる</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>次回予定日を自動計算</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>次回予定日に通知</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/screenshot1.png"
                  alt="記録画面"
                  width={480}
                  height={480}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/screenshot2.png"
                  alt="スケジュール画面"
                  width={480}
                  height={480}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">月ごとの頻度設定</h3>
                <p className="text-lg text-gray-600">
                  植物は季節毎に適切な水やり・肥料の頻度が変わります。そのため、月ごとに頻度を設定できるようになっています。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>細かいスケジュール設定</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>いつでも変更可能</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">お手入れ種類をカスタマイズ</h3>
                <p className="text-lg text-gray-600">
                  水やり以外にも、葉水・活力剤・固形肥料・植え替えなど、自由に追加できます。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>無制限の追加</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>アイコンのカスタマイズ</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/screenshot3.png"
                  alt="成長記録画面"
                  width={480}
                  height={480}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/screenshot4.png"
                  alt="ノート画面"
                  width={480}
                  height={480}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ノートに成長を記録</h3>
                <p className="text-lg text-gray-600">
                  植物の成長をテキストや写真で記録。成長の変化を可視化し、より良いケアにつなげましょう。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>写真付きノート</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>日々の気づきをメモ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Testimonials Section */}
      < section id="testimonials" className="py-20 bg-green-50" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">たくさんのユーザーに愛用されています</h2>
            <p className="text-xl text-gray-600">Plantotoをご利用いただいているユーザーの声をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  シンプルでとっても良いです！肥料の管理にこのようなアプリを探していました！シンプルで使い易くてとても良いです。ありがとうございます。 できるなら課金でも良いので記録のバックアップ機能があったら嬉しいです。
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  ※現在は、バックアップ機能を提供しています
                </p>
                <p className="font-semibold text-gray-900">App Store</p>

              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  完全無料で、シンプルで、必要十分！！ 他のアプリでは大体有料サービスの肥料のリマインドが出来るのありがたい！ 応援したい！！
                </p>
                <p className="font-semibold text-gray-900">Google Play</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  私の求めていた機能のアプリで、最高にいいアプリだと思います。 SNSで繋がらない、カメラは起動しない、アプリを開いたらお手入れ画面が見られる、お手入れの内容回数頻度も細かく設定できて、間違えた時の削除、編集も悩まずできる等 とてもわかりやすく使いやすいアプリだと思います。
                </p>
                <p className="font-semibold text-gray-900">Google Play</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section >

      {/* Download CTA Section */}
      < section id="download" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">今すぐPlantotoを始めよう</h2>
            <p className="text-xl text-green-100">
              あなたの植物ライフをもっと豊かに
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="https://apps.apple.com/app/apple-store/id6670186137?pt=127291601&ct=lp&mt=8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <FaApple className="mr-2 w-5 h-5" />
                  App Store
                </Button>
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.esugo.plantCare" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6 bg-transparent"
                >
                  <FaGooglePlay className="mr-2 w-5 h-5" />
                  Google Play
                </Button>
              </Link>
            </div>
            <p className="text-sm text-green-200">ダウンロード無料 • 広告なし</p>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer id="contact" className="bg-gray-900 text-white py-16" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/icon.png"
                  alt="Plantoto Icon"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Plantoto</span>
              </div>
              <p className="text-gray-400">
                植物と一緒に成長する喜びを、すべての人に。あなたの植物ライフをサポートします。
              </p>
            </div>


            <div>
              <h3 className="font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="https://plantoto.notion.site/Plantoto-1fab43ec676980198412d612c3bca95b" className="hover:text-white transition-colors">
                    使い方ガイド
                  </Link>
                </li>
                <li>
                  <Link href="https://forms.gle/SpVrMngbYVtNr7KE6" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kamitte5@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Plantoto. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}
