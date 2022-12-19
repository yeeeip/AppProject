import { Link } from 'react-router-dom';
import './Styles/App.css';
import createCompanyImg from '../images/createCompany.jpg'
import friendsImg from '../images/friends.webp'
import friendsCompanyImg from '../images/friendsCompany.webp'
import { useState } from 'react';
import api from '../lib/axios';


function App() {
  const [tost, setTost] = useState('')

  async function generateTost() {
    try {
      const { data } = await api.get("/api/v1/congratulation")
      console.log(data)
      setTost(data?.tost)
    } catch (error) {
      // toast.error(errorToShow);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header__text">Проведите свой лучший Новый Год вместе с весёлой компанией</div>
      </div>
      <div className="card advantages">
        <div className="advantages__item">
          <div className="advantages__svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM217.6 228.8L217.6 228.8L217.4 228.5C217.2 228.3 217 228 216.7 227.6C216 226.8 215.1 225.7 213.9 224.3C211.4 221.4 207.9 217.7 203.7 213.1C194.9 206.2 184.8 200 176 200C167.2 200 157.1 206.2 148.3 213.1C144.1 217.7 140.6 221.4 138.1 224.3C136.9 225.7 135.1 226.8 135.3 227.6C134.1 228 134.8 228.3 134.6 228.5L134.4 228.8L134.4 228.8C132.3 231.6 128.7 232.7 125.5 231.6C122.2 230.5 120 227.4 120 224C120 206.1 126.7 188.4 136.6 175.2C146.4 162.2 160.5 152 176 152C191.5 152 205.6 162.2 215.4 175.2C225.3 188.4 232 206.1 232 224C232 227.4 229.8 230.5 226.5 231.6C223.3 232.7 219.7 231.6 217.6 228.8V228.8zM377.6 228.8L377.4 228.5C377.2 228.3 377 228 376.7 227.6C376 226.8 375.1 225.7 373.9 224.3C371.4 221.4 367.9 217.7 363.7 213.1C354.9 206.2 344.8 200 336 200C327.2 200 317.1 206.2 308.3 213.1C304.1 217.7 300.6 221.4 298.1 224.3C296.9 225.7 295.1 226.8 295.3 227.6C294.1 228 294.8 228.3 294.6 228.5L294.4 228.8L294.4 228.8C292.3 231.6 288.7 232.7 285.5 231.6C282.2 230.5 280 227.4 280 224C280 206.1 286.7 188.4 296.6 175.2C306.4 162.2 320.5 152 336 152C351.5 152 365.6 162.2 375.4 175.2C385.3 188.4 392 206.1 392 224C392 227.4 389.8 230.5 386.5 231.6C383.3 232.7 379.7 231.6 377.6 228.8L377.6 228.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>
          </div>
          <h5>Познакомитесь с новыми людьми</h5>
          <div className="card-body advantages__body"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit. Vero culpa tenetur harum accusamus quidem neque similique provident. Quasi suscipit hic ut in, beatae dolore, dolorum, nesciunt voluptatem modi repellendus assumenda? Possimus sint accusantium, blanditiis earum facilis nemo soluta.</p></div>
        </div>
        <div className="advantages__item">
          <div style={{ width: '3.7em', marginBottom: 0 }} className="advantages__svg">
            <svg version="1.1" viewBox="0 0 700 700">
              <defs>
                <symbol id="v" overflow="visible">
                <path d="m18.766-1.125c-0.96875 0.5-1.9805 0.875-3.0312 1.125-1.043 0.25781-2.1367 0.39062-3.2812 0.39062-3.3984 0-6.0898-0.94531-8.0781-2.8438-1.9922-1.9062-2.9844-4.4844-2.9844-7.7344 0-3.2578 0.99219-5.8359 2.9844-7.7344 1.9883-1.9062 4.6797-2.8594 8.0781-2.8594 1.1445 0 2.2383 0.13281 3.2812 0.39062 1.0508 0.25 2.0625 0.625 3.0312 1.125v4.2188c-0.98047-0.65625-1.9453-1.1406-2.8906-1.4531-0.94922-0.3125-1.9492-0.46875-3-0.46875-1.875 0-3.3516 0.60547-4.4219 1.8125-1.0742 1.1992-1.6094 2.8555-1.6094 4.9688 0 2.1055 0.53516 3.7617 1.6094 4.9688 1.0703 1.1992 2.5469 1.7969 4.4219 1.7969 1.0508 0 2.0508-0.14844 3-0.45312 0.94531-0.3125 1.9102-0.80078 2.8906-1.4688z"/>
                </symbol>
                <symbol id="d" overflow="visible">
                <path d="m13.734-11.141c-0.4375-0.19531-0.87109-0.34375-1.2969-0.4375-0.41797-0.10156-0.83984-0.15625-1.2656-0.15625-1.2617 0-2.2305 0.40625-2.9062 1.2188-0.67969 0.80469-1.0156 1.9531-1.0156 3.4531v7.0625h-4.8906v-15.312h4.8906v2.5156c0.625-1 1.3438-1.7266 2.1562-2.1875 0.82031-0.46875 1.8008-0.70312 2.9375-0.70312 0.16406 0 0.34375 0.011719 0.53125 0.03125 0.19531 0.011719 0.47656 0.039062 0.84375 0.078125z"/>
                </symbol>
                <symbol id="a" overflow="visible">
                <path d="m17.641-7.7031v1.4062h-11.453c0.125 1.1484 0.53906 2.0078 1.25 2.5781 0.70703 0.57422 1.7031 0.85938 2.9844 0.85938 1.0312 0 2.082-0.14844 3.1562-0.45312 1.082-0.3125 2.1914-0.77344 3.3281-1.3906v3.7656c-1.1562 0.4375-2.3125 0.76562-3.4688 0.98438-1.1562 0.22656-2.3125 0.34375-3.4688 0.34375-2.7734 0-4.9297-0.70312-6.4688-2.1094-1.5312-1.4062-2.2969-3.3789-2.2969-5.9219 0-2.5 0.75391-4.4609 2.2656-5.8906 1.5078-1.4375 3.582-2.1562 6.2188-2.1562 2.4062 0 4.332 0.73047 5.7812 2.1875 1.4453 1.4492 2.1719 3.3828 2.1719 5.7969zm-5.0312-1.625c0-0.92578-0.27344-1.6719-0.8125-2.2344-0.54297-0.57031-1.25-0.85938-2.125-0.85938-0.94922 0-1.7188 0.26562-2.3125 0.79688s-0.96484 1.2969-1.1094 2.2969z"/>
                </symbol>
                <symbol id="c" overflow="visible">
                <path d="m9.2188-6.8906c-1.0234 0-1.793 0.17188-2.3125 0.51562-0.51172 0.34375-0.76562 0.85547-0.76562 1.5312 0 0.625 0.20703 1.1172 0.625 1.4688 0.41406 0.34375 0.98828 0.51562 1.7188 0.51562 0.92578 0 1.7031-0.32812 2.3281-0.98438 0.63281-0.66406 0.95312-1.4922 0.95312-2.4844v-0.5625zm7.4688-1.8438v8.7344h-4.9219v-2.2656c-0.65625 0.92969-1.3984 1.6055-2.2188 2.0312-0.82422 0.41406-1.8242 0.625-3 0.625-1.5859 0-2.8711-0.45703-3.8594-1.375-0.99219-0.92578-1.4844-2.1289-1.4844-3.6094 0-1.7891 0.61328-3.1016 1.8438-3.9375 1.2383-0.84375 3.1797-1.2656 5.8281-1.2656h2.8906v-0.39062c0-0.76953-0.30859-1.332-0.92188-1.6875-0.61719-0.36328-1.5703-0.54688-2.8594-0.54688-1.0547 0-2.0312 0.10547-2.9375 0.3125-0.89844 0.21094-1.7305 0.52344-2.5 0.9375v-3.7344c1.0391-0.25 2.0859-0.44141 3.1406-0.57812 1.0625-0.13281 2.125-0.20312 3.1875-0.20312 2.7578 0 4.75 0.54688 5.9688 1.6406 1.2266 1.0859 1.8438 2.8555 1.8438 5.3125z"/>
                </symbol>
                <symbol id="b" overflow="visible">
                <path d="m7.7031-19.656v4.3438h5.0469v3.5h-5.0469v6.5c0 0.71094 0.14062 1.1875 0.42188 1.4375s0.83594 0.375 1.6719 0.375h2.5156v3.5h-4.1875c-1.9375 0-3.3125-0.39844-4.125-1.2031-0.80469-0.8125-1.2031-2.1797-1.2031-4.1094v-6.5h-2.4219v-3.5h2.4219v-4.3438z"/>
                </symbol>
                <symbol id="k" overflow="visible">
                <path d="m12.766-13.078v-8.2031h4.9219v21.281h-4.9219v-2.2188c-0.66797 0.90625-1.4062 1.5703-2.2188 1.9844s-1.7578 0.625-2.8281 0.625c-1.8867 0-3.4336-0.75-4.6406-2.25-1.2109-1.5-1.8125-3.4258-1.8125-5.7812 0-2.3633 0.60156-4.2969 1.8125-5.7969 1.207-1.5 2.7539-2.25 4.6406-2.25 1.0625 0 2 0.21484 2.8125 0.64062 0.82031 0.42969 1.5664 1.0859 2.2344 1.9688zm-3.2188 9.9219c1.0391 0 1.8359-0.37891 2.3906-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3516-1.1562-2.3906-1.1562-1.043 0-1.8398 0.38672-2.3906 1.1562-0.55469 0.76172-0.82812 1.8711-0.82812 3.3281 0 1.4609 0.27344 2.5742 0.82812 3.3438 0.55078 0.76172 1.3477 1.1406 2.3906 1.1406z"/>
                </symbol>
                <symbol id="j" overflow="visible">
                <path d="m10.5-3.1562c1.0508 0 1.8516-0.37891 2.4062-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3555-1.1562-2.4062-1.1562-1.0547 0-1.8594 0.38672-2.4219 1.1562-0.55469 0.77344-0.82812 1.8828-0.82812 3.3281 0 1.4492 0.27344 2.5586 0.82812 3.3281 0.5625 0.77344 1.3672 1.1562 2.4219 1.1562zm-3.25-9.9219c0.67578-0.88281 1.4219-1.5391 2.2344-1.9688 0.82031-0.42578 1.7656-0.64062 2.8281-0.64062 1.8945 0 3.4453 0.75 4.6562 2.25 1.207 1.5 1.8125 3.4336 1.8125 5.7969 0 2.3555-0.60547 4.2812-1.8125 5.7812-1.2109 1.5-2.7617 2.25-4.6562 2.25-1.0625 0-2.0078-0.21094-2.8281-0.625-0.8125-0.42578-1.5586-1.0859-2.2344-1.9844v2.2188h-4.8906v-21.281h4.8906z"/>
                </symbol>
                <symbol id="i" overflow="visible">
                <path d="m0.34375-15.312h4.8906l4.125 10.391 3.5-10.391h4.8906l-6.4375 16.766c-0.64844 1.6953-1.4023 2.8828-2.2656 3.5625-0.86719 0.6875-2 1.0312-3.4062 1.0312h-2.8438v-3.2188h1.5312c0.83203 0 1.4375-0.13672 1.8125-0.40625 0.38281-0.26172 0.67969-0.73047 0.89062-1.4062l0.14062-0.42188z"/>
                </symbol>
                <symbol id="h" overflow="visible">
                <path d="m2.5781-20.406h5.25v16.422h9.25v3.9844h-14.5z"/>
                </symbol>
                <symbol id="u" overflow="visible">
                <path d="m2.3594-21.281h4.8906v11.594l5.625-5.625h5.6875l-7.4688 7.0312 8.0625 8.2812h-5.9375l-5.9688-6.3906v6.3906h-4.8906z"/>
                </symbol>
                <symbol id="g" overflow="visible">
                <path d="m14.312-14.828v3.7188c-1.043-0.4375-2.0547-0.76562-3.0312-0.98438-0.98047-0.21875-1.9023-0.32812-2.7656-0.32812-0.92969 0-1.6211 0.11719-2.0781 0.34375-0.44922 0.23047-0.67188 0.58984-0.67188 1.0781 0 0.38672 0.17188 0.68359 0.51562 0.89062 0.34375 0.21094 0.95703 0.36719 1.8438 0.46875l0.85938 0.125c2.5078 0.32422 4.1953 0.85156 5.0625 1.5781 0.86328 0.73047 1.2969 1.8711 1.2969 3.4219 0 1.6367-0.60547 2.8672-1.8125 3.6875-1.1992 0.8125-2.9922 1.2188-5.375 1.2188-1.0234 0-2.0742-0.078125-3.1562-0.23438-1.0742-0.15625-2.1797-0.39453-3.3125-0.71875v-3.7188c0.96875 0.48047 1.9609 0.83984 2.9844 1.0781 1.0312 0.23047 2.0781 0.34375 3.1406 0.34375 0.95703 0 1.6758-0.12891 2.1562-0.39062 0.47656-0.26953 0.71875-0.66406 0.71875-1.1875 0-0.4375-0.16797-0.75781-0.5-0.96875-0.33594-0.21875-0.99609-0.38281-1.9844-0.5l-0.85938-0.10938c-2.1797-0.26953-3.7031-0.77344-4.5781-1.5156-0.875-0.73828-1.3125-1.8594-1.3125-3.3594 0-1.625 0.55078-2.8281 1.6562-3.6094 1.1133-0.78906 2.8203-1.1875 5.125-1.1875 0.89453 0 1.8359 0.074219 2.8281 0.21875 1 0.13672 2.082 0.35156 3.25 0.64062z"/>
                </symbol>
                <symbol id="f" overflow="visible">
                <path d="m17.75-9.3281v9.3281h-4.9219v-7.1094c0-1.3438-0.03125-2.2656-0.09375-2.7656s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-21.281h4.8906v8.2031c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"/>
                </symbol>
                <symbol id="t" overflow="visible">
                <path d="m2.3594-15.312h4.8906v15.312h-4.8906zm0-5.9688h4.8906v4h-4.8906z"/>
                </symbol>
                <symbol id="s" overflow="visible">
                <path d="m12.422-21.281v3.2188h-2.7031c-0.6875 0-1.1719 0.125-1.4531 0.375-0.27344 0.25-0.40625 0.6875-0.40625 1.3125v1.0625h4.1875v3.5h-4.1875v11.812h-4.8906v-11.812h-2.4375v-3.5h2.4375v-1.0625c0-1.6641 0.46094-2.8984 1.3906-3.7031 0.92578-0.80078 2.3672-1.2031 4.3281-1.2031z"/>
                </symbol>
                <symbol id="e" overflow="visible">
                <path d="m9.6406-12.188c-1.0859 0-1.9141 0.39062-2.4844 1.1719-0.57422 0.78125-0.85938 1.9062-0.85938 3.375s0.28516 2.5938 0.85938 3.375c0.57031 0.77344 1.3984 1.1562 2.4844 1.1562 1.0625 0 1.875-0.38281 2.4375-1.1562 0.57031-0.78125 0.85938-1.9062 0.85938-3.375s-0.28906-2.5938-0.85938-3.375c-0.5625-0.78125-1.375-1.1719-2.4375-1.1719zm0-3.5c2.6328 0 4.6914 0.71484 6.1719 2.1406 1.4766 1.418 2.2188 3.3867 2.2188 5.9062 0 2.5117-0.74219 4.4805-2.2188 5.9062-1.4805 1.418-3.5391 2.125-6.1719 2.125-2.6484 0-4.7148-0.70703-6.2031-2.125-1.4922-1.4258-2.2344-3.3945-2.2344-5.9062 0-2.5195 0.74219-4.4883 2.2344-5.9062 1.4883-1.4258 3.5547-2.1406 6.2031-2.1406z"/>
                </symbol>
                <symbol id="r" overflow="visible">
                <path d="m16.547-12.766c0.61328-0.94531 1.3477-1.6719 2.2031-2.1719 0.85156-0.5 1.7891-0.75 2.8125-0.75 1.7578 0 3.0977 0.54688 4.0156 1.6406 0.92578 1.0859 1.3906 2.6562 1.3906 4.7188v9.3281h-4.9219v-7.9844-0.35938c0.007813-0.13281 0.015625-0.32031 0.015625-0.5625 0-1.082-0.16406-1.8633-0.48438-2.3438-0.3125-0.48828-0.82422-0.73438-1.5312-0.73438-0.92969 0-1.6484 0.38672-2.1562 1.1562-0.51172 0.76172-0.77344 1.8672-0.78125 3.3125v7.5156h-4.9219v-7.9844c0-1.6953-0.14844-2.7852-0.4375-3.2656-0.29297-0.48828-0.8125-0.73438-1.5625-0.73438-0.9375 0-1.6641 0.38672-2.1719 1.1562-0.51172 0.76172-0.76562 1.8594-0.76562 3.2969v7.5312h-4.9219v-15.312h4.9219v2.2344c0.60156-0.86328 1.2891-1.5156 2.0625-1.9531 0.78125-0.4375 1.6406-0.65625 2.5781-0.65625 1.0625 0 2 0.25781 2.8125 0.76562 0.8125 0.51172 1.4258 1.2305 1.8438 2.1562z"/>
                </symbol>
                <symbol id="q" overflow="visible">
                <path d="m2.5781-20.406h5.875l7.4219 14v-14h4.9844v20.406h-5.875l-7.4219-14v14h-4.9844z"/>
                </symbol>
                <symbol id="p" overflow="visible">
                <path d="m2.1875-5.9688v-9.3438h4.9219v1.5312c0 0.83594-0.007813 1.875-0.015625 3.125-0.011719 1.25-0.015625 2.0859-0.015625 2.5 0 1.2422 0.03125 2.1328 0.09375 2.6719 0.070313 0.54297 0.17969 0.93359 0.32812 1.1719 0.20703 0.32422 0.47266 0.57422 0.79688 0.75 0.32031 0.16797 0.69141 0.25 1.1094 0.25 1.0195 0 1.8203-0.39062 2.4062-1.1719 0.58203-0.78125 0.875-1.8672 0.875-3.2656v-7.5625h4.8906v15.312h-4.8906v-2.2188c-0.74219 0.89844-1.5234 1.5586-2.3438 1.9844-0.82422 0.41406-1.7344 0.625-2.7344 0.625-1.7617 0-3.1055-0.53906-4.0312-1.625-0.92969-1.082-1.3906-2.6602-1.3906-4.7344z"/>
                </symbol>
                <symbol id="o" overflow="visible">
                <path d="m17.75-9.3281v9.3281h-4.9219v-7.1406c0-1.3203-0.03125-2.2344-0.09375-2.7344s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-15.312h4.8906v2.2344c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"/>
                </symbol>
                <symbol id="n" overflow="visible">
                <path d="m2.5781-20.406h8.7344c2.5938 0 4.582 0.57812 5.9688 1.7344 1.3945 1.1484 2.0938 2.7891 2.0938 4.9219 0 2.1367-0.69922 3.7812-2.0938 4.9375-1.3867 1.1562-3.375 1.7344-5.9688 1.7344h-3.4844v7.0781h-5.25zm5.25 3.8125v5.7031h2.9219c1.0195 0 1.8047-0.25 2.3594-0.75 0.5625-0.5 0.84375-1.2031 0.84375-2.1094 0-0.91406-0.28125-1.6172-0.84375-2.1094-0.55469-0.48828-1.3398-0.73438-2.3594-0.73438z"/>
                </symbol>
                <symbol id="m" overflow="visible">
                <path d="m2.3594-15.312h4.8906v15.031c0 2.0508-0.49609 3.6172-1.4844 4.7031-0.98047 1.082-2.4062 1.625-4.2812 1.625h-2.4219v-3.2188h0.85938c0.92578 0 1.5625-0.21094 1.9062-0.625 0.35156-0.41797 0.53125-1.2461 0.53125-2.4844zm0-5.9688h4.8906v4h-4.8906z"/>
                </symbol>
                <symbol id="l" overflow="visible">
                <path d="m14.719-14.828v3.9844c-0.65625-0.45703-1.3242-0.79688-2-1.0156-0.66797-0.21875-1.3594-0.32812-2.0781-0.32812-1.3672 0-2.4336 0.40234-3.2031 1.2031-0.76172 0.79297-1.1406 1.9062-1.1406 3.3438 0 1.4297 0.37891 2.543 1.1406 3.3438 0.76953 0.79297 1.8359 1.1875 3.2031 1.1875 0.75781 0 1.4844-0.10938 2.1719-0.32812 0.6875-0.22656 1.3203-0.56641 1.9062-1.0156v4c-0.76172 0.28125-1.5391 0.48828-2.3281 0.625-0.78125 0.14453-1.5742 0.21875-2.375 0.21875-2.7617 0-4.9219-0.70703-6.4844-2.125-1.5547-1.4141-2.3281-3.3828-2.3281-5.9062 0-2.5312 0.77344-4.5039 2.3281-5.9219 1.5625-1.4141 3.7227-2.125 6.4844-2.125 0.80078 0 1.5938 0.074219 2.375 0.21875 0.78125 0.13672 1.5547 0.35156 2.3281 0.64062z"/>
                </symbol>
              </defs>
              <g>
                <path d="m288.4 134.06c15.598 0 30.551-6.1953 41.578-17.219 11.027-11.027 17.223-25.984 17.223-41.578 0-15.598-6.1953-30.551-17.223-41.578-11.027-11.027-25.98-17.223-41.578-17.223-15.594 0-30.551 6.1953-41.578 17.223-11.023 11.027-17.219 25.98-17.219 41.578 0.011719 15.59 6.2148 30.535 17.238 41.559 11.023 11.023 25.969 17.227 41.559 17.238zm0-100.8v0.003906c11.141 0 21.824 4.4219 29.699 12.301 7.8789 7.875 12.301 18.559 12.301 29.699 0 11.137-4.4219 21.82-12.301 29.695-7.875 7.8789-18.559 12.305-29.699 12.305-11.137 0-21.82-4.4258-29.695-12.305-7.8789-7.875-12.305-18.559-12.305-29.695 0-11.145 4.4258-21.836 12.301-29.719 7.875-7.8867 18.555-12.324 29.699-12.34z"/>
                <path d="m470.34 75.266c0-15.598-6.1992-30.559-17.227-41.586-11.031-11.027-25.992-17.219-41.594-17.215-15.598 0.003906-30.555 6.207-41.578 17.242-11.023 11.035-17.211 25.996-17.203 41.594 0.011718 15.598 6.2188 30.555 17.258 41.574s26.004 17.203 41.602 17.188c15.578-0.027344 30.512-6.2344 41.523-17.258 11.012-11.02 17.203-25.961 17.219-41.539zm-100.8 0c0-11.141 4.4258-21.824 12.301-29.699 7.8789-7.8789 18.562-12.301 29.699-12.301 11.141 0 21.824 4.4219 29.699 12.301 7.875 7.875 12.301 18.559 12.301 29.699 0 11.137-4.4258 21.82-12.301 29.695-7.875 7.8789-18.559 12.305-29.699 12.305-11.145 0-21.832-4.4258-29.719-12.301-7.8828-7.875-12.32-18.555-12.336-29.699z"/>
                <path d="m543.93 316.62-31.531-137.43c7.4023-5.957 11.59-15.031 11.328-24.527-0.26172-9.4922-4.9492-18.32-12.668-23.859-7.7148-5.5391-17.578-7.1523-26.66-4.3633l-57.398 18.758h-197.18c-9.4727-0.027343-18.676 3.1562-26.102 9.0352-7.4258 5.8828-12.637 14.105-14.777 23.332l-32.875 138.99c-2.0352 9.0625 0.85547 18.527 7.6055 24.906 6.75 6.375 16.363 8.7266 25.297 6.1758 8.9297-2.5469 15.855-9.6133 18.227-18.594l11.648-46.031v218.4c0.015625 11.133 4.4453 21.809 12.316 29.68 7.875 7.875 18.551 12.305 29.684 12.32h54.938c13.223 0.007813 25.672-6.2188 33.598-16.801 7.9258 10.582 20.379 16.809 33.602 16.801h56c11.133-0.015625 21.809-4.4453 29.684-12.32 7.8711-7.8711 12.301-18.547 12.316-29.68v-217.62l11.648 45.246c2.4648 8.9023 9.4023 15.871 18.289 18.379 8.8906 2.5078 18.445 0.19531 25.203-6.1016s9.7344-15.664 7.8594-24.707zm-228.14 210.17h-19.043v-156.07c0-4.6367-3.7578-8.3984-8.3984-8.3984s-8.3984 3.7617-8.3984 8.3984v156.07h-19.098c-6.6836 0-13.094-2.6562-17.82-7.3828-4.7227-4.7266-7.3789-11.133-7.3789-17.816v-283.2c0.035156-0.44531 0.035156-0.89453 0-1.3438 0.48828-4.3281-2.418-8.3164-6.6875-9.1758-4.2734-0.85938-8.4961 1.6914-9.7227 5.875l-28.336 111.05c-1.3945 4.9336-6.4492 7.8789-11.43 6.6562-4.9805-1.2227-8.0977-6.1719-7.0469-11.191l32.871-138.82c1.293-5.5312 4.4219-10.457 8.875-13.977 4.457-3.5195 9.9727-5.4219 15.652-5.4023h198.57c0.875 0.003906 1.7461-0.12891 2.5781-0.39062l58.688-19.098c3.4922-1.2812 7.3555-1.0781 10.691 0.5625 3.3398 1.6406 5.8594 4.5742 6.9766 8.1211 1.1211 3.5469 0.73828 7.3945-1.0547 10.652-1.793 3.2578-4.8438 5.6406-8.4375 6.5938l-70.785 21.504h-77.672c-4.6367 0-8.3984 3.7617-8.3984 8.3984v303.19c0 6.6836-2.6562 13.09-7.3828 17.816-4.7227 4.7266-11.133 7.3828-17.816 7.3828zm209.94-198.3c-2.2773 2.8203-5.9492 4.1211-9.5 3.3633-3.5469-0.75391-6.3672-3.4414-7.2969-6.9492l-28-109.65v0.003906c-1.1797-4.1055-5.2461-6.6758-9.457-5.9727-4.2109 0.69922-7.2266 4.4492-7.0078 8.7148v0.44922 283.14c0 6.6836-2.6562 13.09-7.3828 17.816-4.7266 4.7266-11.133 7.3828-17.816 7.3828h-19.32v-156.07c0-4.6367-3.7617-8.3984-8.4023-8.3984-4.6367 0-8.3984 3.7617-8.3984 8.3984v156.07h-20.16c-6.6836 0-13.094-2.6562-17.82-7.3828-4.7266-4.7266-7.3789-11.133-7.3789-17.816v-294.79h70.613c0.83594 0.007812 1.6641-0.10547 2.4648-0.33594l66.246-20.16 30.465 134.01c0.67578 2.8633-0.007813 5.8789-1.8477 8.1758z"/>
                <use x="70" y="644"/>
                <use x="90.550781" y="644"/>
                <use x="104.359375" y="644"/>
                <use x="123.347656" y="644"/>
                <use x="142.242188" y="644"/>
                <use x="155.628906" y="644"/>
                <use x="174.617188" y="644"/>
                <use x="204.410156" y="644"/>
                <use x="224.453125" y="644"/>
                <use x="252.453125" y="644"/>
                <use x="270.292969" y="644"/>
                <use x="289.1875" y="644"/>
                <use x="307.808594" y="644"/>
                <use x="324.476562" y="644"/>
                <use x="344.40625" y="644"/>
                <use x="354.007812" y="644"/>
                <use x="370.671875" y="644"/>
                <use x="390.605469" y="644"/>
                <use x="70" y="672"/>
                <use x="82.183594" y="672"/>
                <use x="95.992188" y="672"/>
                <use x="115.226562" y="672"/>
                <use x="154.152344" y="672"/>
                <use x="167.535156" y="672"/>
                <use x="187.46875" y="672"/>
                <use x="216.207031" y="672"/>
                <use x="239.640625" y="672"/>
                <use x="258.878906" y="672"/>
                <use x="278.8125" y="672"/>
                <use x="308.492188" y="672"/>
                <use x="329.015625" y="672"/>
                <use x="342.820312" y="672"/>
                <use x="362.058594" y="672"/>
                <use x="371.65625" y="672"/>
                <use x="390.648438" y="672"/>
                <use x="407.242188" y="672"/>
              </g>
            </svg>
          </div>
          <h5>Весело проведёте время</h5>
          <div className="card-body advantages__body"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat aut obcaecati quisquam, magnam, repellendus architecto consequuntur laudantium consectetur modi exercitationem ipsum sed perspiciatis debitis, dolores laboriosam. Voluptas, quaerat? Modi.</p></div>
        </div>
      </div>
      <div className="card createCompany">
        <div className="card-img createCompany__img"><img src={createCompanyImg} alt="createCompany" /></div>
        <div className="card-body createCompany__body">
          <h3>Создайте свою компанию!</h3>
          <p className="createCompany__body-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repellat quod illo cupiditate veniam officia labore ullam voluptate aliquam ratione reprehenderit esse, laborum maxime. Beatae laborum voluptatem aspernatur a corrupti delectus. Sequi modi, illum explicabo vero quos saepe non qui.</p>
          <Link to='create' className="btn">Создать!</Link>
        </div>
      </div>
      <div className="card findCompany">
        <div className="card-img findCompany__img"><img src={friendsImg} alt="friends" /></div>
        <div className="card-body findCompany__body">
          <h3>Найди себе компанию!</h3>
          <p className="findCompany__body-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repellat quod illo cupiditate veniam officia labore ullam voluptate aliquam ratione reprehenderit esse, laborum maxime. Beatae laborum voluptatem aspernatur a corrupti delectus. Sequi modi, illum explicabo vero quos saepe non qui.</p>
          <Link to='search' className="btn">Найти!</Link>
        </div>
      </div>
      <div className="card mergeСompanies">
        <div className="card-img mergeСompanies__img"><img src={friendsCompanyImg} alt="friendsCompany" /></div>
        <div className="card-body mergeСompanies__body">
          <h3>Объедините компании!</h3>
          <p className="mergeСompanies__body-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repellat quod illo cupiditate veniam officia labore ullam voluptate aliquam ratione reprehenderit esse, laborum maxime. Beatae laborum voluptatem aspernatur a corrupti delectus. Sequi modi, illum explicabo vero quos saepe non qui.</p>
          <Link to='join' className="btn">Объединить!</Link>
        </div>
      </div>
      <div className="card mergeСompanies">
        <div className="card-img mergeСompanies__img"><img src={friendsCompanyImg} alt="friendsCompany" /></div>
        <div className="card-body mergeСompanies__body">
          <h3>Генератор тостов!</h3>
          <p><em style={{ fontSize: '1.2em', color: '#2e9fef'}}>{tost && tost}</em></p>
          <Link onClick={generateTost} className="btn">Сгенерировать!</Link>
        </div>
      </div>
    </div>
  );
}

export default App;