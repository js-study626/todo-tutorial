import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 | todo",
}

const STEPS: { title: string; description: string }[] = [
  {
    title: "할 일 추가",
    description: "입력창에 내용을 적고 Enter를 누르면 목록에 추가됩니다.",
  },
  {
    title: "완료 표시",
    description: "항목 왼쪽 체크박스를 누르면 완료로 바뀌고, 다시 누르면 되돌아갑니다.",
  },
  {
    title: "내용 수정",
    description:
      "항목 글자를 더블클릭하면 수정할 수 있습니다. Enter로 저장하고, Esc로 취소합니다.",
  },
  {
    title: "삭제",
    description: "항목 오른쪽 휴지통 버튼을 누르면 그 항목이 삭제됩니다.",
  },
  {
    title: "필터",
    description: "전체 · 진행중 · 완료 탭으로 보고 싶은 항목만 골라 볼 수 있습니다.",
  },
  {
    title: "완료한 일 지우기",
    description: "완료한 항목이 있으면 목록 아래에 나타나는 버튼으로 한 번에 지웁니다.",
  },
  {
    title: "저장",
    description:
      "할 일은 이 브라우저에 저장됩니다. 다른 브라우저나 기기에서는 보이지 않습니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법</h1>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, description }, index) => (
          <li key={title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
              {index + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link
        href="/"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        ← 할 일 목록으로
      </Link>
    </main>
  )
}
