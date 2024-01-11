// src/pages/page2.js
import React from "react"
import { Link } from "gatsby"
import "../components/service/service.scss"
import "../components/layout.scss"

export default function Page3() {
    return (
        <>
            <div className="text-primary">業務内容</div>
            <Link to="/">ホームに戻る</Link>
        </>
    )
}
