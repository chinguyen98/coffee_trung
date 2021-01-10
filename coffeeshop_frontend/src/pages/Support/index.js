
// import moment from  'moment'

import axios from 'axios'
import $ from 'jquery'
export const ScrollToDestination = (dest, speed) => {

    if (window.pageYOffset < dest) {
        let setTime = setInterval(() => {
            window.scrollTo(0, window.pageYOffset + speed)
            if (window.pageYOffset > dest - 15) {
                window.scrollTo(0, dest - 5)
                clearInterval(setTime)
            }
        }, 0);

    }
    else {
        let setTime = setInterval(() => {
            window.scrollTo(0, window.pageYOffset - speed)
            if (window.pageYOffset < dest + 10) {
                window.scrollTo(0, dest - 5)
                clearInterval(setTime)
            }
        }, 0);

    }


}
/// goi API 
export const callAPI = (method, resolve, reject) => {
    return axios(method).then(
        Response => resolve(Response.data)
    ).catch(erro => reject(erro))

}

export const custumNAvMoble = (left, speed) => {
    $(".nav-mobile").animate(
        {
            left: left
        },
        speed
    );
}




