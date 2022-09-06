import styles from "../scss/Stories.module.scss"
import Image from "next/image"
import Link from "next/link"
import data from "../data/data"
import { useState } from "react"
import {MdArrowBack , MdArrowForward} from "react-icons/md"
import  {CSSTransition, SwitchTransition} from "react-transition-group"




const Stories = () => {
  const [activeIndex , setActiveIndex] = useState(0)
  const activeSlide = data[activeIndex]
  console.log(activeSlide)
  console.log(data.length)
  console.log(activeIndex)


  function handleNext() {
    if (activeIndex >= data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
      console.log(activeIndex)
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }


 

  return (
    <section className={styles.stories}>
         <h1 className={styles.h1}>Business Success Stories</h1>

         <div className={styles.arrow}>
          <div
            className={styles.prev}
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className={styles.next}
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>

       <div className={styles.contanier}>
         <SwitchTransition component={null}>
           <CSSTransition key={activeSlide.id} timeout={300} classNames={styles.fade}>
            <>
                <div className={styles.col1}>
                  <p className={styles.p}>
                      {activeSlide.p}
                  </p>
                  <h3 className={styles.h3}>{activeSlide.name}</h3>
                  <h4 className={styles.h4}>{activeSlide.domain}</h4>
                </div>
                <div className={styles.col2}>
                    <Image src={activeSlide.image} width={500} height={500}/>
                </div>
                </>
             </CSSTransition>
        </SwitchTransition>

        
       </div>
    </section>
  )
}

export default Stories