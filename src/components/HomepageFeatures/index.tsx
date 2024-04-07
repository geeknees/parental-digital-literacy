import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'オンラインセーフティとプライバシーの保護',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        子どもが安全にインターネットを利用できるようにするためには、親自身がオンラインセキュリティとプライバシーの保護について十分に知識を持つ必要があります。これには、適切なフィルタリングツールの使用、安全なパスワードの作成方法の理解、そして子どもとのコミュニケーションを通じて、彼らにオンラインで遭遇する可能性のあるリスク（例えば、サイバーブリングや個人情報の盗難）について警告することが含まれます。
      </>
    )
  },
  {
    title: 'デジタルメディアの批判的評価',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        インターネットは有用な情報が豊富にありますが、誤情報や偏った情報も少なくありません。親がデジタルメディアの内容を批判的に評価するスキルを持つことは、子どもが正確で信頼できる情報源を見分け、情報の質を判断する上で役立ちます。これには、情報の出所をチェックする方法、異なる視点を比較する技術、そして情報のバイアスを識別する能力が必要です。
      </>
    )
  },
  {
    title: 'デジタルコミュニケーションと社会性の促進',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        デジタル技術は、人々とつながり、情報を共有する新しい方法を提供しますが、これらのツールを効果的かつ適切に使用するためには特定のスキルが必要です。親がデジタルコミュニケーションのエチケットを理解し、これを子どもに教えることは重要です。これには、オンラインでの礼儀正しい振る舞い、感情的な知性の発達、そしてソーシャルメディアの健全な使用法を含みます。
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
