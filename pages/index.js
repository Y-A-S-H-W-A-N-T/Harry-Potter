import Link from "next/link"
import { useState } from "react"
import style from '../styles/Home.module.css'

export default function Home() { 
  
  const [part1,setPart1] = useState(false)
  const [part2,setPart2] = useState(false)

  return (
    <div className={style.back}>
      <img src='./harry.jpg' className={style.harry}/>
      <div className={style.potter}>
        <h1 style={{justifyContent: 'center', display: 'flex'}}>HARRY POTTER AND THE CURSED CHILD</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{display: 'block'}}>
            <h1 onClick={()=>setPart1(!part1)} style={{paddingRight: '50px'}}>Part one</h1>
            { part1 && <><Link href="/Part_one/act_one">ACT ONE</Link><br/>
            <Link href="/Part_one/act_two">ACT TWO</Link></>}
          </div>
          <div style={{display: 'block'}}>
            <h1  onClick={()=>setPart2(!part2)}>Part two</h1>
            { part2 && <><Link href="/Part_two/act_three">ACT THREE</Link><br/>
            <Link href="/Part_two/act_four">ACT FOUR</Link></>}
            </div>
        </div>
      </div>
    </div>
  );
}
