const delay = 5;
const delay2 = delay / 1000;

function startType() {
    setTimeout(() => {
        $('.typing').append('A');

        setTimeout(() => {
            $('.typing').append(' ');

            setTimeout(() => {
                $('.typing').append('d');

                setTimeout(() => {
                    $('.typing').append('e');

                    setTimeout(() => {
                        $('.typing').append('v');

                        setTimeout(() => {
                            $('.typing').append('e');

                            setTimeout(() => {
                                $('.typing').append('l');

                                setTimeout(() => {
                                    $('.typing').append('o');

                                    setTimeout(() => {
                                        $('.typing').append('p');

                                        setTimeout(() => {
                                            $('.typing').append('e');

                                            setTimeout(() => {
                                                $('.typing').append('r');
                                            }, 200);
                                        }, 200);
                                    }, 200);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}