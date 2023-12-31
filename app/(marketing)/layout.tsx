import React, { ReactNode } from 'react'

const Marketinglayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-full bg-slate-100">

            <main className="h-full pt-40 pb-20 bg-slate-100">
                {children}
            </main>

        </div>
    )
}

export default Marketinglayout