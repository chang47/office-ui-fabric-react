// tslint:disable:max-line-length

import { registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = ''): void {
  registerIcons({
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2IconSet-7"`,
      src: `url('data:application/octet-stream;base64,d09GRgABAAAAAC50AA4AAAAAVkAAAnCkAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABRAAAAEgAAABgOdF5ZGNtYXAAAAGMAAABjwAAA7K9qrSkY3Z0IAAAAxwAAAAgAAAAKgnZCa9mcGdtAAADPAAAAPAAAAFZ/J7mjmdhc3AAAAQsAAAADAAAAAwACAAbZ2x5ZgAABDgAACP+AABCpJS2dlNoZWFkAAAoOAAAADYAAAA2/LwF6WhoZWEAAChwAAAAGwAAACQQIgfjaG10eAAAKIwAAABjAAAAzh9WE1lsb2NhAAAo8AAAAMwAAADMQSNQmG1heHAAACm8AAAAHgAAACAA4AIZbmFtZQAAKdwAAAP1AAAJ+o2T8E5wb3N0AAAt1AAAABQAAAAg/1EA3HByZXAAAC3oAAAAiQAAANN4vfIOeJxjYGH/wTiBgZWBgXUWqzEDA6M0hGa+yJDGJMTBysrFyMQIBgxAIMCAAL7BCgoMDu+7PxlxgPkQkgGsjgXCU2BgAAAHSgjieJzN0ctLlVEUBfBzvT5Aa6+PnDpIZ5ZQGJg5sf6FBok4sEAIfFwfly4FgXotjdLu1WH5LJ/pTFCaOtCcGKLiQCpFrczkrP01CkQ9qDhxEDTRDWdt1h794BhjguboZZiAS5Mw5lrgsCcmxN3uNQ0m2Vy2r2yrjdm4nbAzdtfu8RKzmcN8FrCQ91jMCtayja8ZY5zt7OAbdrKL3exhL/v4ju/ZzwEOcojDHOEHjnKMs5ynz11N1Cy9qtf1ht7Uh1quYY3ppE7psq7oN13VNd3QTf2uP/Sn/tLfavWP7vkBP+in+pn+FT93f9+Y/xC+/afwEz8fCzOPhXla5oR1TjjhhAtO+PVQuH4i3NJt3Tkt9B57Ee+RV+vd9W57F70L+IsvWMUSFjGNj5jEIPrQipd4gWY8QxRPUI8WPHct6rLe3Z6iyV2jiKARYTSgBmUoRSHycA3pSEMKkhCUZVmSORmXNmmSsNRISKqlSiJSKeVS4TLkdkjuywMplRIpkjtyS3KPfv98TyD5rAVnPwcIMR4AAHicY9BiCGUoYGhgWMXIwNjA7MB4gMEBiwgQAACqHAeVeJxdj79Ow0AMxnMktIQnQDohnXUqQ5WInemGSyTUJSUM56WA1Eqk74CUhcUDz+JuGfNiCMwR/i62v8/6fL9zp/nJfHacpUcqKVacN+Gg1AsO6u2Z/fkhT+82ZWFM1XlW92XBagmia04X9U2waMjQ9ZZMbR4ftpwtYpfFjvDScNKGTuptAHaov8cd4lU8ksUjhBLfT/F9jEv6tSxWhtOLJqwD916z86gBTMVjE3j0GhB/yKQ/dWcT42w5ZdvATnOCRJ/KAvdEmoT7S49/9aCS/4b7bci/q0H1Tdz0FvSHYcGCsKGXZ9tQCRpg+Q6E/GTGAAEAAgAIAAr//wAPeJytewt4G9WZ6Dnz0Mhvj2VJtmxLluWR/JQfsizH8WNiJ3Zs5+UkBGITEpqQkAeBNCThlTIsCSEkgWwCuxDabW4gLFu+C7QFtpAtCBYu3W7psoSy7brdLx9tcvuCcsuWxrY0vv9/ZkaWnbBku5U9c86cmTmP//zv/x/CkacIEfaJuwlPJEJisl9W/LL/Kf4/Ei9xLyUHibh74oGHhSUEfjwhlNjxsTziIG64giflAA3IWEZohEKBh6hxWlK7Te9+Owm12+jrbyc0XZMIHkmNkoQ2RTg4eG1So3CHZ2fCU2iViI2wuWRh/04/jfqd7ID2CUI1QUvCbRuBFzR2ELhQiSqpdkIqSJi0ky+R28iD8LaXd/pburhYmI+2RJp9tDXS7I7ByVmYy4nNrdGWYKDC5ix0+dPqsCS4W0vxmUBFmOukgbQqnKN8s5dzymZbVIYB/Je0CO+oWxbXTB6rWbxlnlBWXpyfJa7erWl7VgvZ+cXlZcnfeYJBDxycx6wk/l3Y61KaS28tDIRLSsKBQq0w0ACVisI9ZU1BZ9zTECiEFo9Z2jyzGqQ+/9pd9w8M3L9rrV9qaW8U5IxTLS2nMmShaU7LO0FrGPPQ48mM0mbFNVUCbzuhl6npmjPYVMb9EbvWiTUIl6rNbkOcIBrghAY7lkdKCHHAViEaKFGjIroltxSSQrFQzA3IkyQ6HJI2Dm9SwiujFy6Mnj/PzpI2liSJMV7hSauiJElS4cbGrJtwJkLaWFkMBwmVEfkCsoV51B/12wn0Dng0QWxQEQniiwT4OAm4w2njmkASRGAYpxMN8dqGhQSTgxEkkkNk4iTFhGSw6ct+huXTeAiHMMYp0I9GlYkxEXpJAE7zWkIzDljk2IRiJ2P62IQmEg5ua4DsxsHoiMI6bBqsw08GyGZYBSCQ20sBh2xSLo9YFApTQKTWWBfvrsjloBFQ0+0VI81dQqyLRlvwCZ5vBuTu4qOy+Y5ciN3wfHzhc8/9TasvFPK1fP2bz/fNvIrcfMvWxrzmxgqb6Fy6/pabN1VVbbr5lvVLXKKtorE5r3HrLTdHUs/MOfr4iZ6ex08cnWPdk7T80PxI2WDtpFbf7430VuWb14J1rUlyicNWXB4qtOdK5Y2VxXmSlFdc2Vgu5doLQ+XFNkeJLE0QSfYUsqf4N5Rmb06Ot1lJdLH7hR5Zgp0AUNlxT3KJh1SRWgNKToAQFR20i7pNmpWoFBP9Eu6Q0yZFsfRTqa1moNXnLU1G9APXce+UDo44q325nszkoooDiQE6WZ48LYxySm8n7p1AqKKPCZq3dWFNaLA02XQdvZ37YWnZuNPrC2VkJgcPVCxnm/pGZsVxDpgYVYgxP+kzmF8D6SXLyAqYn8tZiLhuY6dABSJ9kJ2iLYj9reyEPMgtueBEYftwJwOww07YOkQ3YHiwAEBoBRZxh812V9NdgUjLnojX5/NG9rREAtBw2VZ9sKqvxett6asyS/1Gho8E16nhnPUxmvzCbqZb9XfTOmMlUA8ZJwwSukI1BgZk1kBr0GjybOQBIUMyiHJETi/lQDSCB64z4gyww4bgRMLQNbMCzAFHgZ9Nm2AlB9RqEBcQmYYShScX4WEotEmgcRACSQKvkmygK8LmgvTbRLpID+kjg2QJWU5WkRFynYlDwKoFg18z+pZpS1iIMuAHogFkKNGI0+8IMHIC8qIwUad5uOERB9zm0w6JIMN2lFaUOpB7T8DUgB0Q1qATJHpzslqG7M7Lc8sZk9rsn53gq3p5/bxIVXWDL1GOXdoJA0rinK+huioyr56eA4ZlbAIK0/KiSm+ZLJd5K4v0c1ZHPJnmNSl+k6KlbNifIuSaJp6FYNVuqERgzX4aoxRAPWmiDIENpqNQAupsH6HHkWezzU/coHFxjozqYwmCTx0f0bdj5ybsc0kBUGyI1JMoyOVeC+b+EArGCMC7mIP9B7hRg3W7I0x5COCcFJwH4AgNxTLgwNtiyCloCI3J06cRRqAjEAMMuOujICwAJTQkS+TEAGj9rVMjtEt/Y+RU8ozG22wiA+2kdpofY4KVgRRkD0JHgK6AP4+OojQAVg0ATBCE4RR5YkT/R/0fR56Ygj5VMROXZzdOTM9oBorfQG4k28gt5FaLN6HiYOAVKgK4XLZmigzAb1J5xI9kL5sNsr8ZuIYN+VguZUwgjSmU0Wrq9Kf/SSS6BolxTVTD06RmXeLBnaqoSFyHa8QFG0CrmPwPLASCgr+4saAAUZQ+bj3E4KpNiy7jsBPsDrueTI2HpciuLmod8+d3WG9jaSPG9SRB5cJRUNBYjLdsJP0hC0EJYXIctDUpDtwjj7iID7QGJsf9SsTZRWMmCwSeIULVS93RiKraADGniBqYXym8OAEcR9Xjk6gSasKLlfMDKh+nKhdPqtqhQF8FjYP2AA9gk6arFX2BQ7h1oqE/wP5lgfZaQqqBbxPGdZHg4RBNJoCHoVEE5FwaiKKcjYrANSR4riUIU+wSTekT6uIjsPd2chFxD6QCSDZELUAjG0HtQyvp82UHq8ptU8QdbG6JOH8DCEhtUlZ9a1uDN+hxB8S9tkBLlx9ZLNKYxJgeYCBllQkkSdgW0Jsv5BZp2Q5XJo2HuqON9WGPJgdDilwSbWlubHCXKKVuj7+t2g38mhCOTkxdsBXaPYDfsO4MziFTOiF4Ji9o3Hk7FJMXQENq4S6YcCH28hQPd6AeB5gXpZIf+KLkV1Cmwl+GUVDQqzT+j72JRdxvepPXiL/k2iZ/oE/RRv1Rzs1tSBziQ3obXaCf0bfTtfq7wMaQm7AjATQmgGbGQwl7pDFcAEyAscuAY0fJGhiZadLBEAWyQMqhoAshGQGYRSSgNApB1uww1YKAlMu5YONauoSUVAW4cjZt9Kvv7Vn/ncXJRxyIntzWLhVb9rz31dEE6b/9iTVrnri93yphBzUV0byinK7NzRapVlrbXFuaUsuBFsQ4vqp2QX+A79Df4u+sxxbsNL0rKCfWa7yK5NOwsmJdbqnPLzeG+9rq68JlFlngUAZuavT7kmaLAvRDpJ9cT3YhV/GhUpGHkGhALtJNWy/XBqjJSdgQomjrALYyWwcMILG5m4IIa4EnAxXwDrIYeJ+mXo2kuhOHfK6vu+DfZ5Z0y6wGfWeeqzhLH8AGfTDL48rLc3my6Et4Tf8+q9iVl/xnn2t3prsg23oru8CVtdvFvTirJ/7rrpMunxdO8O/1wYkOpd1m5a/lsmIXjoZ9u4pLC+QyjwtHw7FdnrJJ157MQldxvvVOfrGrMHMPdsS6NBpxCNTv6fUA26+bsF1DdpDTl4eu8t+HLk2HrguBO/N1BmFL7wABEY0YAiCMYgJFAGzJXOpM2Y4R4bOi/Nvy82+T3W75Nlm+LZ8WzGrQ38+SHXb9RWzQX8pwyFlwnUEH84uK8umQHa71VW55JM8HrxUV5+2Ry/NWy9yZtB6KsEcq1S2e4/e3L65VlNJI0OUKRkonniprxlpzmaLULWqHu4vquDfyjTfgTdZD/sTshudzXA4ZZyTToYx8hzMXrvMz6FB+vv6iXXa4XpVX5/ndqWX4YT70mfQO4A53T8WcJbVJLw67EGfAfWjNKunFWS1kk/mwdsmcCmCOwEHsoP2hBYp8SQBWchEOG+q8sLkcOgYMvRS4n8wxs88OR4LJcXifwl2Rve8AzmbeE43XCaXwvmi9T4F5GnajOcqfi28FpvV/oYwGWlrDNGQg2Z/ItjSLUzG2pVERLKv2cOmfyLYsLlUWrqtv6ws3yn5faa431tEXtviWzdCJJISjm7SQhaBpjxpSVfRbWjOIEtD78WCWrhQGbc9ylzAIuWX+EmMoYFjeTFEFA8/txw3iUekz1VwN5GL14p5I/m55YV1V93BV9TI1FFKXVbfUrcvxewsLvf4csxQ/0hKnp0hylAd7j1dAPR9NjL3+Oq8YKs/0j9OK6rqCTdWNeryuv7mkpLm/DksHBU3enl+UD/92qxQ0tPspzApURxDW8TiiRBo8JKYLe0kdYAiziJSQ5FYyQM9GPSODQywB9oAKICw3Omu5HCi0oN2cPn8DzJ2qVAV1ZlLjTuuP63E+bjpzaNBcGCiwJH1hiKzahY3aGO3WX39Nf507nSR0o/4aHbOcQOgY0WbMnhKVxqW4pOKuml4PQeW1ixr6aiR1Al0eph9Qk37J/DC4QkIj1LC7mZ2XwYHtSn6pq+M/5k7jjMY1Okd4Ozk6RbgkVSc+0V8TYRtwVF1LPMTt4EBhQsUA1AHmTzLglwM9LzQ9PDMhI6O5EgEkQuu/NeZmBjfoaUB7TjQjAl4aaW6NgZIVYjZ3F1y63KCGmDiAhmQaqED1f7X+vqGGkRA9U5l1d4G6enR1+wMLR5/qBkvBvKMvmHlHumTvdVgMaMYlHn1BW69ry9XwaF19f89BarTSM+mtJv9g68wFqdREFuBKgyEDCaTUUi274jJ8xTGLYuykddBc4CdaIj99hVNk6eHNHR2bDy/t2NGkDzF+Ql8MKB2bDy1LV/ChhIX9S2d9f/rKpgi+uezQ5g4lAC8j86AvNu3owD6TWtq7UZMpZKTsJNxDF1iDXrCYgqSGhBleGageMUxQWCUjDVS3gU84LDeb6dATFH7M3Dd0GCsCW1JSQRUUtX80/DQ05tDkTrJLexpio/UGewOcwrBuiOEzRtuPY64ENBl1LUW35pzdwNXLSSWpYvMNpZEmzpfHQmFOb+qMpJyC0zNF3daa6hg3Rk9PoqUJY3Ha6eQYx2YL3Cxf+2TGNKeIPpo4DZNCA5U/fTqJngPThhcvM78vntsVzukK5jLT/p0Jo7orgRIQLf4hOV8ppEaN9V8RpNApwNCA2ff/w7nijqL5A8cVzxV3dYpN4Up3NrW7/xN6sQ7+CulFRIebOVHtiujF8iRxJJ1ekE8ft3tMPm3gogFPP3qVHMimeebDcUsZ1C35Q7xigRBIFefYiqzpOK3Xz44cS7YeG9HP0vqRY9z3j9ks5jM5qNGXOBKPU23yI/0sPHj8+Aith8eOH7fkEOOhdlIEO0xozB/1h2IggGQmJNhsAibUuOPHMLhwbARHpG382EUMEpigsgDFfXRcOz6CQwkfYbRpioUpdI0zIZPGt3Hd1UT9AgkFpgNzEbiYuzfmRlf9tJj6Ipk0d/PKtsy7c5fteng5CB09PvPaEE+fK4qq+r/U7ho+uL6tvyd5MO3CEEkz4CeC1Z+fkvlsNQxmiE0XDSxi0wR4wfQkbQLemGRaAapk1FB9Zslur4G78kxKM1yPAebnS8NVY/3mHiiIYoyOJW0SqGsmbhLzHiNzwqVox0n8MCJP/VmgiPBUdCrUQf0lcOFQ0gYVRzbRR/TMYw/omfTICXoECSGpXUzez+d/8gmfn7z/GlrOiANphCN0ANS1s3q9/k+6gza/deotvZD30As8BrI8+gXNfJDpRZT8A3lWmi/VgEwHm8EhBZxSyJyEND85PuLWQj9Jjn8/Oc7dC8u8V4jrO/QPHUtK/1bfwd1LH+K2JP8KlyPQOqra3oc1lZAGsC36mX9RAD1AAJVZQA/HbOHvwAVGlGBloEKwfFJugVz/wte0a5ubr9W+9sL16XVL77dKRHGNu0PTX3nhBf0VbWTh0y+/tXHjWy8/vdAWv/Rtoz5J0nvAklOBTibuPnDg7pGFtywOhRbfshDXAkbC+7Z42lrMNUTMNfGWZ9Rck4ORDzWDWjEXPFgZu+K1HGT6AH1/egkjGu174QXap1H189YiXrKWpIqsMVlnLWQEl4Vy2FhP2t6s/hN3hxoLc5vr/HNs1sS3rKX++XZw4lszN9TURRRG57bpaKnDoHBDiGakiyYgzokxHZRQ9G7C1gDVTyL/YAfwEk1X6JiGXk59DG7ODJbyKfqOkK3kVYzqUwPUQabyI8BbY0wjFpDLoq6Pm2GzHOkhFi4V0FYI89aGuJmzXUArwctT5hPz8uYOstirYbcLFkqGFMMoN1EWLVeB8fYXlWD10I3asaVDR+fVrKjZ/9kHz+9dIEmXbdWla756a2+20+vIyG7f+shL7+5oXtvkn9s5L/Q57clDSmtH0U/mbV9WH+wd2fzlOe1f2b0pILsKfNXuQH0w1L5qXsVgd7WjvNql/7R740Bomfa/hgNr1q8dChf6a11l1ZWhtuG55T1RP7963tGhpce0G4eqg4okLdj7/Aef7YeZXbY1mdd761evCc3rnOtvWtu8492XHtnanp3h8DqzP69d2O2rLZXFxrzI0m19PTcOz6mU5ereSPEcX1GoNM/X0NrgcwTnVhWHygpsg/nNgxvnX3fvssrcktr2wfpipTi7WKlTinN9LVasSvpoOlalpEKiTJxncDKLFGGoCkSQGaqygrjccf0m1GnG6DGNxaqSCqcZIduLH9Nj8ADR9JuI4f9B/40URwmi+GUpflHFiARFic5iExzzYtjJRZXdm5H/4mSZJozuI0b2h5+57sooRndigGiivwKwCabMrTNjevw59KZcZEERem46dieWJ8rNAJ9eLkHvqUgiUAgL4kwHDjV2LzFD7vFWFCOF8WF+GoU5tyvS3ElbQinkt1n5LCEMYJTRQreXx/AF/+1rnrlvefSanZ35NbWh7EK5vKmzTOnt7iwX+NyMsoEli3xXndy7qHbh6HWjC2v9Ld3e8JK+BYogiBmSf9HwMPZhJ+MHK686vGnRl1f1eO3OIk9OYbgs0FCWnVFQUsDl/jRDyMnPFGpWH1zbt3m4s7m+uT1U2ViWlVsa8nCS7bd2oaA4zwZcxQF7c86M0wRILdlO9gGHCVMg5piXAvWK7CyxFjGtnbdJLndrLEhTriXDfpZM27mLN9MnAtNCR2AuGCmXF6mEAVGQ2X7om+lC0G/cvaK1dYWbnW2b0y70v2548qabnmwwzm19fW2x/v7Efzas6Ao0Ld/avvLekYb5e06tych1l1csuuf6zgxKvR0jHRU9LeUFvtqiotKCrBxngbuCsyvNnfxSWjByfAKUT1rA1QauatR/LGj6i3Jplq3cGhDOu9PqNamxG56kw/0xNoPkxVDPqvDcTYvr+299ePHmv/+rnSHB767Mr1yx9eDqTEdmy5ZV0ZJwd6W7PuDKK/IU5VW4RXt5a8h5s/7RyLHEKH8aFGRHdXcR+sV8qn+aVjBfpeRSWcfH9/3hg+f2Lliw97kP/rAvrS5plzSZdaNPDdVviVy+z53vv/zoto6ObY++/P7OtLpELmky61ac2+gTfW8OywuJbCPKdApUAiViGkJgiphqpI7hdGjVQBZxZgPaOJjjYcQLRbDRUNIZun6Uhz5ZlBJ6xGwjzFWAE/rrjEQgoANiQxnGWsHamzW3rJlzm57TFPonZ8zGlIFGjkUJ8QE9XKpvBGB1AWcE9uKzHxnA/tFn+6brf3jLyDG4pH2/UcdIHG/4GWA55KSkSidZrGQuWUpGySaykxyYjnFbbluaRl/Yxs+675h1XzRD3ej1VCzHJ1zStPbZfQjE315XXFyHgQhWJr/sCkW93paQ2x1q8XqjIddwejAbysMF3mq3u9pbYJXcQ1VtbVVw0D+GKyrCeNAm03/6dqXaWFraqFaapXQybSxW6nenDwaD63enh7WxTF6fPhyUW9hwcNxjDBfm7rG8rtxDaaOxEmO1Fi9fSdZhHMHQTJw2c385UFKQjWPGk8nZ54L+UuB2FTgDLcDHuZCZIJZKWwTdiKZMnohMtfCKXQ8+eU3PX3TcuX/Lm88c3hCrnL+h21bsry1yeUsUydbWiTqguu+uu/Zpt2z5i4dzVxy5sb2hzuH0tfRVhftiNQX1YVvK2uHJNU8+uGsFLP9gfWzD4Wfe3LLy1MP7Y8ryZYOlxcGSrIKM5aduYOGGb+o/3LtX/+E3H6Xc1n10zitZS/f89cqld6ml0UBVX9QbmLOwcugpvdoyoqYsfnNWOiHVIw0zHwKmdVkpIVCRTujHR94bH6Uaf/q9EXoTXiXGBKhzKtTPAjKfHdGPYzVJzo5gn5nYO+NhVp5SGdiLCujwERKDIQPRiIjxCatME+qGVSz7i2lLMOCvsDllDN8ocNhMXZWa+ipVMYg/TjBjSoxPsIxVGwl6JjR0t1tuFNP3A0DE5yZUMY5vTbI8WPQ0UBVRRY+z+D+zB8lG4L8/Z7GmctJE5gFU+JR0g002kldl6o8hkPx0Gg/QXSwzvaABZCMKPNuJxFPJIHfCyurSECuTY8LgvLMjybP0fKLVtq6wsG7J1q6ubcsaqiit7ARZdfiYuyTcKaiJp7h/5x4/b6WFoUeITfZ8ckw9O5Kopxf0wcCS6s7tK5sah2/qXLqAvpGYKmtSA03V/zlFquoCXeFS0F3iRJWe4FHHKkDLgSqutAk74iLwI6G33N+xvLFp1TzF930+ntS2tPU0rOqtUrpXNXW10uutfI4Ze5rO81k2qFFK2kXMPIbHxjWelUlgz0YaqkRYxA9FwQTBqInh30LtD/HF4NfMukHThhhdjbP0Ug0NGLY/6c/iPIjDdMcp1nsYuOKsNFGWBI3IIWpoBWnTXbFY9cy+WKa11R+d1a+h3DJPRapkbqv0/ie0y48lpPTZz583+nkE7Nd0Fn7evC/Tl+WmFM0+eWbwCQDuhOlITAExbYIs9mqn66STtpOkGaUOJr6ynD3JiPGExU7awEkhR8wB9In5sKLWtr3V0bVwcG4wOHdwYZejdXtbquXpmsOhs//2/v+27thO2jP4XGeZUu9JqJ56pcyZy2fYU23Ls54QTuRwyZzkt7nDqdtpdmiUXAWWKHBpLpcDCVwZ5jgrjMcMRsEwN43YnuDlCqhZt3wCxpUh53irasg/dttOBvaf+YU+ceRBffIXZ/YPIIGqu558+/ydd55/+8ldqlFHsjtCbfhAgmV3bXnl0PDwoVe2YH3/r57dsOHZX70V9GBIBjtAWeUJCsTsE0egtiP47F2/mO7UGACfN6aQ+BTr2Cv2jnXodT/2zgOTwpAP9oAyMEhSMS2AUS3pB73hZuSrDBi5AgOO04RWQRdXacJmZhDchbFhI7g1S5e4JNilGTNOn/3MtaWAg9PVrDUsHhgdXYeLmBX3is7SIgSSDmxjFG1mzwaI6KfYmwX8Ta9A/7/WcEj9ktCYrs3WHNLjFArw9T4yABrXCnI1xtAdhQVg0ziDlZnUAplXcIfCXCUClM4AmMBMvUCYGknrzojDCGaw1Hgj8qKt+bvfPvh3+oUf7Bi478zPYRkHJn/28sEVGSeCpy/o//cxY4m8lgKSoTEMHb33y/XP9j1Dkxjv4MnpUYx4gDaL2VzAGR7Rf/fh0zX76r5LbVR9DiDz8zP3DfTe+eyPPrvvxMPj39rA4Ef3p8HG0BwCPWs7unqMuIhIxk4z7ojpYYwT66l4zszYl4VXdyJ0LotQTgvhxMtgFQJJ+QLMSndQa/8FXs3AP+DalyAY4kBS+wI040tSvmaB/BdYdiQdGy+DbDDgnV+MblMk3V0NeqfBZ8/B2LLp/c+iDiUEvJWPubupcBIl5bu/+LV+cfuWjz948/fXbkvYzqGdov9AH9Ln5332qxx6lB7N/fnHeSzuq5KIFJfeAVsJd2oohctrUS4Dj0OMBL202UXdvCOPgpUNKNtAJQfvxg8ZIoDvLhYiSEu5nnGgP1FJ8y1adSke9CRV9oVH3BOcrDzz4/ee32q3ixyfZbv2mZf+z1M3U1EUOI7nqE3MT6rxtB/HMkUvPWzxCehL/5RmivfRzHeCkw9l0cfoscyP8wOy7M/7MEM/oh/J+JTPk/N4e749I0svFFVNU1N/mA6qxTUtGTeiznFD8QN8VkkbwOl7oIHWs+yhqxh8JJfTPOXSYADB5VRkBcHlbG71UipLhZybSrJbzkDCdhhH1O/83D9Zitvh5wnVFwB84gw+wLgL6kOeydePUqp/eGwnjQiPqfCDaRrB00sPTsUs+3z4WefSkkzqCX7vn8SL//K9oIdmlkz+jtPt90yRe+jvxWSXjbMlf63/lr0ft85qfBo0ahy0P0rXg15bBnRdz7KnBMud6+UNaRk0c6FiLrR1pLKWtfc9cWbjxjNP3Le2JRJ1NnYvi4aXdQSKXJ6QJ6d396m1ed945A6N+5nxhPH0+tdX1iyfVxXoWBYOdZUrfQNLGtY+e3A0+wP98Uf36j816MBPyxkdZBoaZEwOYW58zEHRrMbwFffuv74zRb795m+EZeYnCBfp32YnXs2m39WH7dyUXd/IPT0RB11eJWx/LTrwkjbSTQbT8R9zvqmRPQxbiQ7rLvbtRxem4Zu5HqktZALSLxbaammU5bHMwvTv7rqz90DvI85aV+cNC6sEPqlW3hCjLIE7dkMlx/LbkZMiQ5giyfwutVOuLOhow3TqaeTWPw0mp/bszxQSfwD65PiqgY3JSpHov6qpn2Kv1tf8G26awGTaju6e33O2boDbOlNPyyeFRv4bqGgSQI7NFHVm/mtFjf0NNSvrfjT48NChg718PKEKjzWOLGqX8wReP1/MLxCzHqZ3T8SZ/mDRRQ6pJHPI4hTUgAwMqM1w3HGg+iHgvGIkRp1GzqVMZySWebmZ8EqQysGdS1bdvaK6eviO4ei1gzE5NxOsC1WsbGpt8HEiHdN78hyOvFf1kTylK9w0LyTLVb3N4c5ArhhPgLGjtyHS621BvW7BgW096rYHlw7dv6mzAmyV0FX6BjDhLoiBxtb6Mo6+e1Rfk5Pzbb2c/oOyYkG4bsHK6pqrFtQ1DVyFOFfOAc6J58wvKWfNmsHuXO2qfddcvX91uP7a+69dpa2sjiM7FmxLH9090HvL8eGVJ3b19e18mB5JqCCRp3GumSyxIOe0+K1D4nOpE7htiDdqQFy85HA7MJmdxiIgJB1M9H3O3yy0+5tvHFsliJQThC8d2iCKvMAPfeXA4bWUozzHcaKwTniFRdDI5Q5grADId1J89UPuJ3bdVxgqdIQc9AO73uUwqt+xJ2+10xdESczz5hUGHbqq3ylqM7gI9Pcdk3ZzWCaaI8aHsmCRsRIK5IsSjS/s/+CVfx4efu34a53Drw7TwwyIPno4J/FhNr1d/8ss7nvZ+mP05ix9L/c6muOGzgHwBHvmHeAJFSQC0mwR7lKKDNFpJePlNFlHUK+/DGEzBpL+R/GbKO5dixSFT1CJBvjqaGtpCOiZVM336mQ2S+aRqlXhIYMUuVjQg1bAVDpNR2Cjko/NpmpBRTeEAT/ogMQTcYMHIi2fAzjmsy+EZtGy5QOZRc8gT1XgKnHQXi4l6tcm4zpwjHS7AL8OC5AaK9PAmfr0gqa+uwBY8ubHBgFHgPp5G6z3Ivv6y/jAgpqfV0wR6fqPaU5ynX6RJbTcS5VPP/5XXafk/0kaglJjX1Lo5ncUqPvoYHxzhIEO2nUvSeWvpn23NMD4zhV9s2TWnOye9bTfdMoEmBEtfcG3S+MalOzDN01X2EMCMWI+Rk7Tf+frJaNqOOnM59lXZcaoLF2CrTeTxW5rwd5ADW0nuRvWK7mMJMpLvl2c/nIRv1sEBS1GuzC+hNEjxBCbG5U2Mz7nND0U0ZnfPQLg8EW3ZH4hCa85+ULTo4nk8tld2dl3Nd0l13pmfY7ImtlHil0d0FZcJ9+lv6lES2lebmtlIBiqqGzN9fmgPkDj+E0xwMb4tthXdrt6G8/fpt5e5tPkslzrKrdMPml5Z7nG6V7Tv4fs7JwxPM5KvzEvNn9RJYyWhyMPDOC4tqMJthsaake4JQntcJZ7wfa+fEeB3Ld9gTvr8GGbnAUNcoEjHxqyZNthqpreaMwl0NDzkfruppjlMDFnp3E40ryQ6NMSWQqWdRiYxZR8I43ZhhnRqGkaX16hb4vhzPgMGnSzzIVF099Cmp+rGb5OGO1Si8i8kJA6jdmwV6UbfbGaoqKamG+8wRerLiqqjvno9/R3H62ch+7teZabWwyXLn1wZ+1Vi7qdgv4z2pAT6p/brnptduKuavWNV/laq9xYs/0Ya+MqUxL6ShpVRVEbSyw/+eQrnLT+G3v7C6vaQ/sTKn2vcbSvpnHo2jq91fQ/abP8T4YHsJqT/fgxOsYnJUY/40bmAUEAMWPGSgJn+R0WnDD+UUt6gEIuiXzMhhCPAWnA8BnQYcTgt2DntKlrnrijr+8OTLI3yp5br45Err61p2fX1c3NV+/6Cvsi/WRxe0ViKyVLHjhz001nHlhCCYspkfZNR5YvP7KpndfSu8AySeDlnvTOGA+onFciaHT3tlcfXL78wVe36Q9oLEi+e/ihbV1d2x4aTvnEyQz/qduMMYVmelKdad7U2aURvWJiKe3Msaw5XFMiJbwQ1JLGYlu6mUmozXwWGw0XwERK1P1/D3dOhwAAAAEAAAACcKT2vUpeXw889QALCAAAAAAAv/3BgAAAAADVfYbHAAD/5gggCBoAAAAJAAIAAAAAAAB4nGNgZGDgYAABEPn/AYcCAyMDKmACAC10AhwAeJxj1WJYxsHAwMDIwODAAAINQFYDEDKAaShg/AWRA4kwgeRgMg4M+MEeRh0QhOqGqReGmgU2D2wjiJ/GcACqC2w6Iwfcdg6gPgfGZEZFIJkAxApA/g4wGyIPUQ/UBwDtLxHRAAAAABYARgBiASABVgGCAboCTAKcAyADZgPyBCQElgU6BXYF7AYCBkAGxAdyCFwIbAh8CIwInAkgCagKBgoaCkgKvAsqC4QL1AwWDGwMwg0cDV4NmA3+DiYOYA6mDsoPMA+YEBoQUBFIEXwRiBGWEdwSShMSEzwTZhOOE7QT0hQIFMIVShV0FdIWOhZeFowWohbIFv4XJBdKF5QYJhjAGVIZ/homGrobPhuCG6ocHhxGHLwc5B1gHYweBB4yHoAe+B++H/QgZCCIIP4hUnicY2BkYGBIZdjPwMMAAoxgkguIUxgjQUwAI58B+wAAeJy1VD+LHDcUf3u79l1wfIRAwKWKEM7HMmtftrFdHXZc+ZqzOXAT0M5oZ4RnR0LSeJiQwqULf4w0hnyKkEDK1PkEqVOlzHtPmt0778ZcAtlhND89vb+/97QAcGf0FYwg/r7GN+IRfI67iPdgH75JeIzyZwlPEH+b8A34FGzCN+Ez+D7hfXgA7xI+gC/gl4RvwTH8nvDt0c+jScKHcLz3K0YZTT7BXbH3Z8Ij+HJ8kfAeHI6/S3iM8rcJTxD/mPANuDP+LeGbIMZ/JLwPbnKQ8AEcTwY/t+DF5IeEb4/fTv5K+BBeHLz56b04uXd/Ls507ow3yyAeG2eNk0GbJhOndS3OdVkFL86VV+61KrKncuF0Ls6ePDsRp96r4M9V2dbSbR9sSy6U8+hZnGTzeTylw3j2XJVGCe2FFMHJQq2keyXMUoRKXcqvdKa1JM7NyspGK5/tTL4KwT6czbquy1bDeYY2s9BbUzppq362NE3ws425b62ttSoEHWTipWnFSvai9QqTwMRILIIRuVMyqKkotLe17KdCNoWwTuNpjioKv9ILq9xKh4DuFj0XUetcNeQLD7wwbgBLijDdLtU6U7R5mApiHm2nZDME0I3oKp1XlzLrMKhu8rotsE3r7E1T9+JI3xVqtcBcNuro4WPZsnqhm1I45QN2iljdBCDzta9HzMCRxihBragFTmPUwnRNbWRxlT0ZqVKOyjEYCtc22DaIQlGZpFOp2l5lFIex6ZM6NQQdIj+VXmjMObt+t+E9CDiBe3Af5ojOQEMODgx4fJcQUPYYkcM7T6tEiUbUQIYnp1DjI+AcZSVUeOZ5p/CrUPs1rgVqPkW7Be7JN8V4gv8sJ2zvWZPsyKqEFv1J1LyOxXV0LjgPn3KmSjOsc37FdrC8bPecszG4CtShqiS+gRkoULriLF+hjFiik4p1d/FX8r5FBgftHL8r3EvMSTNb2b9gnngOKH0IM3w6fjL096F9luLMEPfspWQ/Fj30KF2yN6p2tjO655wtdkRzH8Xagnr/kmsSzESP35a5i0xExgZtkhmu2qEG1aFgivuC9Sx3vGcJ8UFxLHcm2ubJi0p7yb4t95VqDnxGVgvOY+hEzRWR1ZBXtPDcBbclWa5rmF6rq5b3BdrkuJ8yX3HmY9zpOs6HFWiexI55ynHdzVmXKiXtHKtpee6KndyTTc3oCPXv4pcmdJF42eU95vBfud14L9hTiTLHcxzSnRpmdVcFQ/TtvB5dmgGqJNYSON5wC8h/rLVASceVG76VH5s9eWWqFPfFpDVWFXHLN6tlS8p26ObghzRrvsn/PKPxn7FJndl4H26ITizT/FC+C2Y69vZ/uNt/AwscOIgAAAB4nGNgZgCD/34M5QyYIBUAKY8CLXic28CgzbCJkZNJm3ETF4jcztWaG2qrysChvZ07NdhBTwbE4onwsNCQBLF4nc215YVBLD4dFRkRHhCLX05CmI8DxBLg4+FkZwGxBMEAxBLaMKEgwADIYtjOCDeaCW40M9xoFrjRrHCj2eQkoUazw43mgBvNCTd6kzAju/YGBgXX2kwJFwDEASgaAAAA') format('woff')`,
    },
    icons: {
      'AndroidLogo': '\uEF8B',
      'Breadcrumb': '\uEF8C',
      'ClearFilter': '\uEF8F',
      'Flow': '\uEF90',
      'PageEdit': '\uEFB6',
      'Database': '\uEFC7',
      'DocumentManagement': '\uEFFC',
      'CRMReport': '\uEFFE',
      'ZipFolder': '\uF012',
      'TextDocument': '\uF029',
      'PageCheckedOut': '\uF02C',
      'SaveAndClose': '\uF038',
      'Script': '\uF03A',
      'Archive': '\uF03F',
      'ActivityFeed': '\uF056',
      'EventDate': '\uF059',
      'CaretRight': '\uF06B',
      'SetAction': '\uF071',
      'CaretSolidLeft': '\uF08D',
      'CaretSolidDown': '\uF08E',
      'CaretSolidRight': '\uF08F',
      'CaretSolidUp': '\uF090',
      'PowerAppsLogo': '\uF091',
      'PowerApps2Logo': '\uF092',
      'SearchIssue': '\uF09A',
      'SearchIssueMirrored': '\uF09B',
      'FabricAssetLibrary': '\uF09C',
      'FabricDataConnectionLibrary': '\uF09D',
      'FabricDocLibrary': '\uF09E',
      'FabricFormLibrary': '\uF09F',
      'FabricFormLibraryMirrored': '\uF0A0',
      'FabricReportLibrary': '\uF0A1',
      'FabricReportLibraryMirrored': '\uF0A2',
      'FabricPublicFolder': '\uF0A3',
      'FabricFolderSearch': '\uF0A4',
      'FabricMovetoFolder': '\uF0A5',
      'FabricUnsyncFolder': '\uF0A6',
      'FabricSyncFolder': '\uF0A7',
      'FabricOpenFolderHorizontal': '\uF0A8',
      'FabricFolder': '\uF0A9',
      'FabricFolderFill': '\uF0AA',
      'FabricNewFolder': '\uF0AB',
      'FabricPictureLibrary': '\uF0AC',
      'AddFavorite': '\uF0C8',
      'AddFavoriteFill': '\uF0C9',
      'BufferTimeBefore': '\uF0CF',
      'BufferTimeAfter': '\uF0D0',
      'BufferTimeBoth': '\uF0D1',
      'CannedChat': '\uF0F2',
      'SkypeForBusinessLogo': '\uF0FC',
      'PageCheckedin': '\uF104',
      'CaretBottomLeftSolid8': '\uF121',
      'CaretBottomRightSolid8': '\uF122',
      'FolderHorizontal': '\uF12B',
      'MicrosoftStaffhubLogo': '\uF130',
      'GiftboxOpen': '\uF133',
      'StatusCircleOuter': '\uF136',
      'StatusCircleInner': '\uF137',
      'ExploreContentSingle': '\uF164',
      'CollapseContent': '\uF165',
      'CollapseContentSingle': '\uF166',
      'InfoSolid': '\uF167',
      'ProgressRingDots': '\uF16A',
      'CaloriesAdd': '\uF172',
      'BranchFork': '\uF173',
      'HardDriveGroup': '\uF18F',
      'BucketColor': '\uF1B6',
      'BucketColorFill': '\uF1B7',
      'Taskboard': '\uF1C2',
      'SingleColumn': '\uF1D3',
      'DoubleColumn': '\uF1D4',
      'TripleColumn': '\uF1D5',
      'ColumnLeftTwoThirds': '\uF1D6',
      'ColumnRightTwoThirds': '\uF1D7',
      'AccessLogoFill': '\uF1DB',
      'AnalyticsLogo': '\uF1DE',
      'AnalyticsQuery': '\uF1DF',
      'NewAnalyticsQuery': '\uF1E0',
      'AnalyticsReport': '\uF1E1',
      'WordLogo': '\uF1E3',
      'WordLogoFill': '\uF1E4',
      'ExcelLogo': '\uF1E5',
      'ExcelLogoFill': '\uF1E6',
      'OneNoteLogo': '\uF1E7',
      'OneNoteLogoFill': '\uF1E8',
      'OutlookLogo': '\uF1E9',
      'OutlookLogoFill': '\uF1EA',
      'PowerPointLogo': '\uF1EB',
      'PowerPointLogoFill': '\uF1EC',
      'PublisherLogo': '\uF1ED',
      'PublisherLogoFill': '\uF1EE',
      'ScheduleEventAction': '\uF1EF',
      'FlameSolid': '\uF1F3',
      'ServerProcesses': '\uF1FE',
      'Server': '\uF201',
      'SaveAll': '\uF203',
      'LinkedInLogo': '\uF20A',
      'SidePanelMirrored': '\uF221',
      'ProtectRestrict': '\uF22A',
      'GridViewSmall': '\uF232'
    }
  });
}
