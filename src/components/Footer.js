import Image from "next/image";

export default function Footer() {
    return (
      <>        
        <footer className="footer">
            <div className="grimace-mascot">
                <Image src="assets/imgs/grimace-masco.svg" alt="Grimace" width={334} height={280} />
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
              </defs>
            </svg>
        </footer>
      </>
    );
  }
  