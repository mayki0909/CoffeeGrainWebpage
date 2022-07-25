import { NextComponentType } from 'next';
import { useState } from 'react';
import styles from './projects.module.css';

export const Projects: NextComponentType = () => {
  const itemsStuck = [
    {
      "metadata": {
          "images": {
              "url": "https://cdn.cosmicjs.com/f3aa0fb0-02dd-11ed-b7be-d956591ad437-AXMElectric.png",
              "imgix_url": "https://imgix.cosmicjs.com/7132c9f0-08ff-11ed-b7be-d956591ad437-AXMElectric.webp"
          },
          "link": "https://axm-electric.com",
          "profession": {
              "id": "62cc24d695dc9400092a5c2e",
              "slug": "websolutions",
              "title": "WebSolutions",
              "content": "",
              "bucket": "62cc1cf057d08700092a2294",
              "created_at": "2022-07-11T13:25:42.270Z",
              "created_by": "5df547cf15300700081e64fd",
              "modified_at": "2022-07-11T13:25:42.270Z",
              "created": "2022-07-11T13:25:42.270Z",
              "status": "published",
              "thumbnail": "",
              "published_at": "2022-07-11T13:25:42.270Z",
              "type": "professions",
              "metadata": {
                  "projectslink": "https://nasastran/WebSolutions",
                  "description": "Programming things and hacking and crypto trading. Programming things and hacking and crypto trading. Programming things and hacking and crypto trading. Programming things and hacking and crypto trading. Programming things and hacking and crypto trading",
                  "name": "Web solutions "
              }
          },
          "description": "Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum. Lorem ipsuma lorem ipsum.",
          "name": "AXM Electric"
      }
  },
  {
      "metadata": {
          "images": {
              "url": "https://cdn.cosmicjs.com/0543eb50-011d-11ed-b5fb-c7725933734c-unnamed.png",
              "imgix_url": "https://imgix.cosmicjs.com/0543eb50-011d-11ed-b5fb-c7725933734c-unnamed.png"
          },
          "link": "https://stranNakaterijeprojektobjavljen.com",
          "profession": {
              "id": "62cc24d695dc9400092a5c2e",
              "slug": "websolutions",
              "title": "WebSolutions",
              "content": "",
              "bucket": "62cc1cf057d08700092a2294",
              "created_at": "2022-07-11T13:25:42.270Z",
              "created_by": "5df547cf15300700081e64fd",
              "modified_at": "2022-07-11T13:25:42.270Z",
              "created": "2022-07-11T13:25:42.270Z",
              "status": "published",
              "thumbnail": "",
              "published_at": "2022-07-11T13:25:42.270Z",
              "type": "professions",
              "metadata": {
                  "projectslink": "https://nasastran/WebSolutions",
                  "description": "Programming things and hacking and crypto trading. Programming things and hacking and crypto trading. Programming things and hacking and crypto trading. Programming things and hacking and crypto trading. Programming things and hacking and crypto trading",
                  "name": "Web solutions"
              }
          },
          "description": "Projektni projekt projektek s projektnim projektom. Projektni projekt projektek s projektnim projektom.Projektni projekt projektek s projektnim projektom.Projektni projekt projektek s projektnim projektom.\nProjektni projekt projektek s projektnim projektom.\nProjektni projekt projektek s projektnim projektom.\nProjektni projekt projektek s projektnim projektom.\nProjektni projekt projektek s projektnim projektom.Projektni projekt projektek s projektnim projektom.Projektni projekt projektek s projektnim projektom.Projektni projekt projektek s projektnim projektom.Projektni projekt projektek s projektnim projektom.",
          "name": "Projektni projekt"
      }
  }
  ]
  const [items, setItems] = useState(itemsStuck)
  const [active, setActive] = useState(0);

  const prev = () => {
    if (active - 1 >= 0) {
      setActive(active-1)
    } else {
      setActive(items.length-1)
    }
  }

  const next = () => {
    if (active + 1 < items.length) {
      setActive(active+1)
    } else {
      setActive(0)
    }
  }

  return (
    <div id='projects' className='container mt-5'>
      <h2 className={styles.heading}>PROJECTS</h2>
      <div className={styles.card}>
        <div className='carousel'>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={items[active].metadata.images.imgix_url} alt="Project active image" width={'100%'} height={'100%'}/>
            </div>
          </div>
          <a className="carousel-control-prev" onClick={()=>prev()}>
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" onClick={()=>next()}>
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
        <h3>{items[active].metadata.name}</h3>
        <h4>{items[active].metadata.profession.metadata.name}</h4>
        <h5>{items[active].metadata.description}</h5>
      </div>
    </div>
  )
}