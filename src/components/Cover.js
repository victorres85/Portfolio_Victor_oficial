import React, { useEffect, useRef } from 'react';
import Logo from '../img/VA_1.svg';
import Html5 from '../img/tecnologies/Html5.svg';
import Css from '../img/tecnologies/Css.svg';
import React_svg from '../img/tecnologies/React.svg';
import javascript from '../img/tecnologies/javascript.svg';
import python from '../img/tecnologies/Python.svg';
import Java from '../img/tecnologies/Java.svg';
import Django from '../img/tecnologies/Django.svg';
import Mongodb from '../img/tecnologies/Mongodb.svg';
import Postgresql from '../img/tecnologies/Postgresql.svg';
import Git from '../img/tecnologies/Git.svg';
import Github from '../img/tecnologies/Github.svg';
import Docker from '../img/tecnologies/Docker.svg';
import Nodejs_svg from '../img/tecnologies/Nodejs.svg';
import Sass_svg from '../img/tecnologies/Sass.svg';

function Cover() {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
        <div className='Cover'>
            <div className='cover-container'>

                <div className='cover-txt'>
                    <div className='text'>
                        <h2>Hi there!!<br></br>
                            My name is Victor Almeida.<br></br>
                            Welcome to my Portfolio website.<br></br>
                            Grab a coffee and browse around!</h2>
                    </div>
                    <div>
                        <h4>Tecnologies I have learned along the way:</h4>
                        <div className='tecnologies'>
                            <ul>
                                <li><img src={Html5} alt="Html5"></img></li>
                                <li><img src={Css} alt="Css"></img></li>
                                <li><img src={Sass_svg} alt="Sass"></img></li>
                                <li><img src={React_svg} alt="React"></img></li>
                                <li><img src={Nodejs_svg} alt="NodeJs"></img></li>
                                <li><img src={javascript} alt="javascript"></img></li>
                                <li><img src={python} alt="python"></img></li>
                                <li><img src={Java} alt="Java"></img></li>
                                <li><img src={Django} alt="Django"></img></li>
                                <li><img src={Mongodb} alt="Mongodb"></img></li>
                                <li><img src={Postgresql} alt="Postgresql"></img></li>
                                <li><img src={Git} alt="Git"></img></li>
                                <li><img src={Github} alt="Github"></img></li>
                                <li><img src={Docker} alt="Docker"></img></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='logo' ref={bgRef}>
                    <img ref={solidLogoRef} className='solid-logo' src={Logo} alt="React Logo" />


                    <svg
                        width="365"
                        height="280"
                        viewBox="0 0 365 280"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">

                        <g
                            className='svg-container'
                            transform='translate(0 457) scale(.1 -.1'
                            fill='none'>

                            <path ref={outlineLogoRef}

                                d="M55.2006 193.665ZM74.3162 195.352C65.0439 191.98 59.0193 185.766 56.1545 176.661L54.2467 177.261C57.3048 186.981 63.7962 193.654 73.6327 197.231L74.3162 195.352ZM56.1575 176.67C53.3046 167.272 52.3573 153.415 53.3812 135.025L51.3843 134.914C50.3564 153.375 51.2877 167.513 54.2437 177.251L56.1575 176.67ZM53.3812 135.025L60.2844 11.4423L58.2875 11.3308L51.3843 134.913L53.3812 135.025ZM60.2825 11.469C60.4359 9.61572 60.7035 8.22023 61.0589 7.24299L59.1793 6.55944C58.7372 7.77501 58.4494 9.36976 58.2894 11.3041L60.2825 11.469ZM61.0589 7.24299C61.748 5.34801 62.8148 4.28787 64.2085 3.84406C65.6615 3.3814 67.661 3.52557 70.3074 4.48801L70.991 2.60844C68.1553 1.57719 65.6587 1.28334 63.6017 1.93834C61.4854 2.6122 60.0282 4.2254 59.1793 6.55944L61.0589 7.24299ZM70.3074 4.48801C73.0074 5.46992 74.6377 6.74491 75.4293 8.21012L77.189 7.25944C76.0726 5.19323 73.9297 3.67719 70.991 2.60844L70.3074 4.48801ZM75.4624 8.26677C76.2962 9.5939 76.6965 11.94 76.4434 15.5245L78.4384 15.6654C78.6981 11.9877 78.344 9.0938 77.1559 7.20279L75.4624 8.26677ZM76.4426 15.5361L69.1336 139.503L71.1301 139.621L78.4392 15.6538L76.4426 15.5361ZM69.1335 139.505C68.335 153.412 68.5541 163.624 69.8334 170.065L71.7951 169.676C70.5687 163.501 70.3329 153.507 71.1302 139.619L69.1335 139.505ZM69.841 170.1C71.3498 176.488 74.3492 180.733 79.0157 182.43L79.6992 180.55C75.9076 179.171 73.2116 175.67 71.7875 169.64L69.841 170.1ZM79.0157 182.43C83.5507 184.079 88.5346 182.614 93.8289 178.545L92.6102 176.96C87.5664 180.836 83.309 181.863 79.6992 180.55L79.0157 182.43ZM93.8289 178.545C99.1126 174.485 105.894 166.901 114.162 155.884L112.562 154.683C104.311 165.679 97.6645 173.075 92.6102 176.96L93.8289 178.545ZM114.165 155.879L188.284 55.9434L186.678 54.752L112.559 154.688L114.165 155.879ZM188.283 55.9451C190.327 53.2008 192.115 51.7232 193.619 51.2375L193.005 49.3342C190.893 50.016 188.792 51.913 186.679 54.7503L188.283 55.9451ZM193.681 51.2153C195.229 50.601 197.297 50.6712 199.997 51.6531L200.681 49.7735C197.742 48.7048 195.126 48.49 192.943 49.3564L193.681 51.2153ZM199.997 51.6531C202.644 52.6155 204.269 53.7895 205.085 55.0774C205.868 56.3129 206.005 57.8106 205.315 59.7056L207.195 60.3891C208.044 58.0551 207.963 55.8826 206.774 54.0067C205.619 52.1833 203.516 50.8048 200.681 49.7735L199.997 51.6531ZM205.315 59.7056C204.96 60.6828 204.269 61.9242 203.196 63.443L204.829 64.597C205.949 63.0118 206.753 61.6047 207.195 60.3891L205.315 59.7056ZM203.212 63.4198L128.88 162.48L130.48 163.68L204.812 64.6202L203.212 63.4198ZM128.881 162.478C117.249 177.906 107.343 187.968 99.1605 192.804L100.178 194.526C108.713 189.481 118.814 179.153 130.478 163.682L128.881 162.478ZM99.149 192.811C91.2031 197.653 82.955 198.493 74.3162 195.352L73.6327 197.231C82.8498 200.583 91.7316 199.673 100.19 194.519L99.149 192.811ZM170.329 228.673L169.403 229.052L169.412 229.074L169.422 229.096L170.329 228.673ZM239.921 85.5918L240.344 86.498L240.344 86.498L239.921 85.5918ZM339.773 121.905L338.867 122.328L338.867 122.328L339.773 121.905ZM301.428 276.351L301.851 277.257L301.873 277.247L301.894 277.236L301.428 276.351ZM288.271 271.566L287.346 271.945L287.364 271.989L287.386 272.031L288.271 271.566ZM307.71 210.8L308.65 211.142L308.992 210.202L308.052 209.861L307.71 210.8ZM207.388 174.316L207.73 173.376L206.79 173.034L206.449 173.974L207.388 174.316ZM183.251 233.372L183.674 234.279L183.695 234.269L183.716 234.257L183.251 233.372ZM313.008 196.234L312.666 197.173L313.606 197.515L313.947 196.575L313.008 196.234ZM323.241 127.864L322.324 128.263L322.327 128.271L323.241 127.864ZM248.849 100.543L248.41 99.6449L248.41 99.6449L248.849 100.543ZM212.686 159.749L211.746 159.407L211.404 160.347L212.344 160.689L212.686 159.749ZM176.16 232.39C173.692 231.492 172.097 230.098 171.235 228.25L169.422 229.096C170.553 231.519 172.618 233.23 175.476 234.269L176.16 232.39ZM171.254 228.294C170.433 226.29 170.461 223.921 171.482 221.112L169.603 220.428C168.46 223.571 168.345 226.471 169.403 229.052L171.254 228.294ZM171.482 221.112L204.891 129.248L203.011 128.565L169.603 220.428L171.482 221.112ZM204.891 129.248C212.573 108.126 224.411 93.9328 240.344 86.498L239.498 84.6856C222.965 92.4003 210.824 107.083 203.011 128.565L204.891 129.248ZM240.344 86.498C256.494 78.9622 275.084 78.9602 296.202 86.6404L296.885 84.7608C275.4 76.9471 256.242 76.8727 239.498 84.6856L240.344 86.498ZM296.202 86.6404C317.161 94.2627 331.33 106.177 338.867 122.328L340.679 121.483C332.867 104.741 318.216 92.5184 296.885 84.7608L296.202 86.6404ZM338.867 122.328C346.403 138.48 346.432 156.992 338.81 177.951L340.689 178.635C348.447 157.304 348.491 138.224 340.679 121.483L338.867 122.328ZM338.81 177.951L305.401 269.815L307.281 270.499L340.689 178.635L338.81 177.951ZM305.401 269.815C304.38 272.624 302.879 274.458 300.963 275.466L301.894 277.236C304.363 275.937 306.138 273.641 307.281 270.499L305.401 269.815ZM301.005 275.444C299.171 276.301 296.979 276.329 294.337 275.368L293.654 277.247C296.651 278.337 299.414 278.394 301.851 277.257L301.005 275.444ZM294.337 275.368C291.872 274.472 290.177 273.041 289.156 271.1L287.386 272.031C288.672 274.476 290.793 276.207 293.654 277.247L294.337 275.368ZM289.197 271.187C288.375 269.183 288.403 266.814 289.425 264.005L287.545 263.321C286.402 266.464 286.288 269.364 287.346 271.945L289.197 271.187ZM289.425 264.005L308.65 211.142L306.77 210.459L287.545 263.321L289.425 264.005ZM308.052 209.861L207.73 173.376L207.047 175.256L307.368 211.74L308.052 209.861ZM206.449 173.974L187.224 226.837L189.103 227.52L208.328 174.658L206.449 173.974ZM187.224 226.837C186.202 229.646 184.702 231.479 182.785 232.487L183.716 234.257C186.185 232.959 187.96 230.663 189.103 227.52L187.224 226.837ZM182.828 232.466C180.993 233.322 178.801 233.35 176.16 232.39L175.476 234.269C178.473 235.359 181.236 235.416 183.674 234.279L182.828 232.466ZM313.947 196.575L323.09 171.436L321.21 170.753L312.068 195.892L313.947 196.575ZM323.09 171.436C329.242 154.521 329.66 139.828 324.154 127.457L322.327 128.271C327.557 140.022 327.249 154.149 321.21 170.753L323.09 171.436ZM324.158 127.465C318.708 114.929 307.729 105.73 291.417 99.7973L290.733 101.677C306.687 107.479 317.152 116.364 322.324 128.263L324.158 127.465ZM291.417 99.7973C274.956 93.8108 260.585 93.6967 248.41 99.6449L249.288 101.442C260.836 95.8001 274.616 95.8152 290.733 101.677L291.417 99.7973ZM248.41 99.6449C236.241 105.59 227.096 117.199 220.889 134.268L222.768 134.952C228.864 118.189 237.733 107.087 249.288 101.442L248.41 99.6449ZM220.889 134.268L211.746  159.407L213.626 160.091L222.768  134.268ZM212.344 160.689L312.666 197.173L313.349 195.294L213.028 158.809L212.344 "
                            />

                        </g>

                    </svg>

                </div>

            </div>
        </div>
    )
}

export default Cover;

                                // d="M55.2006 176.961L54.2437 177.251L54.2467 177.261L55.2006 176.961ZM52.3827 134.969L51.3843 134.913L51.3843 134.914L52.3827 134.969ZM59.2859 11.3866L58.2894 11.3041L58.2882 11.3174L58.2875 11.3308L59.2859 11.3866ZM76.3092 7.73478L75.4293 8.21012L75.4449 8.23899L75.4624 8.26677L76.3092 7.73478ZM77.4409 15.5949L76.4433 15.5245L76.4426 15.5361L77.4409 15.5949ZM70.1318 139.562L69.1336 139.503L69.1335 139.505L70.1318 139.562ZM70.8143 169.87L69.8334 170.065L69.8369 170.083L69.841 170.1L70.8143 169.87ZM93.2195 177.753L93.8289 178.545L93.8289 178.545L93.2195 177.753ZM113.362 155.284L114.162 155.884L114.165 155.879L113.362 155.284ZM187.481 55.3477L186.679 54.7503L186.678 54.752L187.481 55.3477ZM193.312 50.2859L193.619 51.2375L193.65 51.2274L193.681 51.2153L193.312 50.2859ZM204.012 64.02L204.812 64.6202L204.821 64.6088L204.829 64.597L204.012 64.02ZM129.68 163.08L130.478 163.682L130.48 163.68L129.68 163.08ZM99.6694 193.665L99.1605 192.804L99.149 192.811L99.6694 193.665ZM74.3162 195.352C65.0439 191.98 59.0193 185.766 56.1545 176.661L54.2467 177.261C57.3048 186.981 63.7962 193.654 73.6327 197.231L74.3162 195.352ZM56.1575 176.67C53.3046 167.272 52.3573 153.415 53.3812 135.025L51.3843 134.914C50.3564 153.375 51.2877 167.513 54.2437 177.251L56.1575 176.67ZM53.3812 135.025L60.2844 11.4423L58.2875 11.3308L51.3843 134.913L53.3812 135.025ZM60.2825 11.469C60.4359 9.61572 60.7035 8.22023 61.0589 7.24299L59.1793 6.55944C58.7372 7.77501 58.4494 9.36976 58.2894 11.3041L60.2825 11.469ZM61.0589 7.24299C61.748 5.34801 62.8148 4.28787 64.2085 3.84406C65.6615 3.3814 67.661 3.52557 70.3074 4.48801L70.991 2.60844C68.1553 1.57719 65.6587 1.28334 63.6017 1.93834C61.4854 2.6122 60.0282 4.2254 59.1793 6.55944L61.0589 7.24299ZM70.3074 4.48801C73.0074 5.46992 74.6377 6.74491 75.4293 8.21012L77.189 7.25944C76.0726 5.19323 73.9297 3.67719 70.991 2.60844L70.3074 4.48801ZM75.4624 8.26677C76.2962 9.5939 76.6965 11.94 76.4434 15.5245L78.4384 15.6654C78.6981 11.9877 78.344 9.0938 77.1559 7.20279L75.4624 8.26677ZM76.4426 15.5361L69.1336 139.503L71.1301 139.621L78.4392 15.6538L76.4426 15.5361ZM69.1335 139.505C68.335 153.412 68.5541 163.624 69.8334 170.065L71.7951 169.676C70.5687 163.501 70.3329 153.507 71.1302 139.619L69.1335 139.505ZM69.841 170.1C71.3498 176.488 74.3492 180.733 79.0157 182.43L79.6992 180.55C75.9076 179.171 73.2116 175.67 71.7875 169.64L69.841 170.1ZM79.0157 182.43C83.5507 184.079 88.5346 182.614 93.8289 178.545L92.6102 176.96C87.5664 180.836 83.309 181.863 79.6992 180.55L79.0157 182.43ZM93.8289 178.545C99.1126 174.485 105.894 166.901 114.162 155.884L112.562 154.683C104.311 165.679 97.6645 173.075 92.6102 176.96L93.8289 178.545ZM114.165 155.879L188.284 55.9434L186.678 54.752L112.559 154.688L114.165 155.879ZM188.283 55.9451C190.327 53.2008 192.115 51.7232 193.619 51.2375L193.005 49.3342C190.893 50.016 188.792 51.913 186.679 54.7503L188.283 55.9451ZM193.681 51.2153C195.229 50.601 197.297 50.6712 199.997 51.6531L200.681 49.7735C197.742 48.7048 195.126 48.49 192.943 49.3564L193.681 51.2153ZM199.997 51.6531C202.644 52.6155 204.269 53.7895 205.085 55.0774C205.868 56.3129 206.005 57.8106 205.315 59.7056L207.195 60.3891C208.044 58.0551 207.963 55.8826 206.774 54.0067C205.619 52.1833 203.516 50.8048 200.681 49.7735L199.997 51.6531ZM205.315 59.7056C204.96 60.6828 204.269 61.9242 203.196 63.443L204.829 64.597C205.949 63.0118 206.753 61.6047 207.195 60.3891L205.315 59.7056ZM203.212 63.4198L128.88 162.48L130.48 163.68L204.812 64.6202L203.212 63.4198ZM128.881 162.478C117.249 177.906 107.343 187.968 99.1605 192.804L100.178 194.526C108.713 189.481 118.814 179.153 130.478 163.682L128.881 162.478ZM99.149 192.811C91.2031 197.653 82.955 198.493 74.3162 195.352L73.6327 197.231C82.8498 200.583 91.7316 199.673 100.19 194.519L99.149 192.811ZM170.329 228.673L169.403 229.052L169.412 229.074L169.422 229.096L170.329 228.673ZM239.921 85.5918L240.344 86.498L240.344 86.498L239.921 85.5918ZM339.773 121.905L338.867 122.328L338.867 122.328L339.773 121.905ZM301.428 276.351L301.851 277.257L301.873 277.247L301.894 277.236L301.428 276.351ZM288.271 271.566L287.346 271.945L287.364 271.989L287.386 272.031L288.271 271.566ZM307.71 210.8L308.65 211.142L308.992 210.202L308.052 209.861L307.71 210.8ZM207.388 174.316L207.73 173.376L206.79 173.034L206.449 173.974L207.388 174.316ZM183.251 233.372L183.674 234.279L183.695 234.269L183.716 234.257L183.251 233.372ZM313.008 196.234L312.666 197.173L313.606 197.515L313.947 196.575L313.008 196.234ZM323.241 127.864L322.324 128.263L322.327 128.271L323.241 127.864ZM248.849 100.543L248.41 99.6449L248.41 99.6449L248.849 100.543ZM212.686 159.749L211.746 159.407L211.404 160.347L212.344 160.689L212.686 159.749ZM176.16 232.39C173.692 231.492 172.097 230.098 171.235 228.25L169.422 229.096C170.553 231.519 172.618 233.23 175.476 234.269L176.16 232.39ZM171.254 228.294C170.433 226.29 170.461 223.921 171.482 221.112L169.603 220.428C168.46 223.571 168.345 226.471 169.403 229.052L171.254 228.294ZM171.482 221.112L204.891 129.248L203.011 128.565L169.603 220.428L171.482 221.112ZM204.891 129.248C212.573 108.126 224.411 93.9328 240.344 86.498L239.498 84.6856C222.965 92.4003 210.824 107.083 203.011 128.565L204.891 129.248ZM240.344 86.498C256.494 78.9622 275.084 78.9602 296.202 86.6404L296.885 84.7608C275.4 76.9471 256.242 76.8727 239.498 84.6856L240.344 86.498ZM296.202 86.6404C317.161 94.2627 331.33 106.177 338.867 122.328L340.679 121.483C332.867 104.741 318.216 92.5184 296.885 84.7608L296.202 86.6404ZM338.867 122.328C346.403 138.48 346.432 156.992 338.81 177.951L340.689 178.635C348.447 157.304 348.491 138.224 340.679 121.483L338.867 122.328ZM338.81 177.951L305.401 269.815L307.281 270.499L340.689 178.635L338.81 177.951ZM305.401 269.815C304.38 272.624 302.879 274.458 300.963 275.466L301.894 277.236C304.363 275.937 306.138 273.641 307.281 270.499L305.401 269.815ZM301.005 275.444C299.171 276.301 296.979 276.329 294.337 275.368L293.654 277.247C296.651 278.337 299.414 278.394 301.851 277.257L301.005 275.444ZM294.337 275.368C291.872 274.472 290.177 273.041 289.156 271.1L287.386 272.031C288.672 274.476 290.793 276.207 293.654 277.247L294.337 275.368ZM289.197 271.187C288.375 269.183 288.403 266.814 289.425 264.005L287.545 263.321C286.402 266.464 286.288 269.364 287.346 271.945L289.197 271.187ZM289.425 264.005L308.65 211.142L306.77 210.459L287.545 263.321L289.425 264.005ZM308.052 209.861L207.73 173.376L207.047 175.256L307.368 211.74L308.052 209.861ZM206.449 173.974L187.224 226.837L189.103 227.52L208.328 174.658L206.449 173.974ZM187.224 226.837C186.202 229.646 184.702 231.479 182.785 232.487L183.716 234.257C186.185 232.959 187.96 230.663 189.103 227.52L187.224 226.837ZM182.828 232.466C180.993 233.322 178.801 233.35 176.16 232.39L175.476 234.269C178.473 235.359 181.236 235.416 183.674 234.279L182.828 232.466ZM313.947 196.575L323.09 171.436L321.21 170.753L312.068 195.892L313.947 196.575ZM323.09 171.436C329.242 154.521 329.66 139.828 324.154 127.457L322.327 128.271C327.557 140.022 327.249 154.149 321.21 170.753L323.09 171.436ZM324.158 127.465C318.708 114.929 307.729 105.73 291.417 99.7973L290.733 101.677C306.687 107.479 317.152 116.364 322.324 128.263L324.158 127.465ZM291.417 99.7973C274.956 93.8108 260.585 93.6967 248.41 99.6449L249.288 101.442C260.836 95.8001 274.616 95.8152 290.733 101.677L291.417 99.7973ZM248.41 99.6449C236.241 105.59 227.096 117.199 220.889 134.268L222.768 134.952C228.864 118.189 237.733 107.087 249.288 101.442L248.41 99.6449ZM220.889 134.268L211.746 159.407L213.626 160.091L222.768 134.952L220.889 134.268ZM212.344 160.689L312.666 197.173L313.349 195.294L213.028 158.809L212.344 160.689Z"
