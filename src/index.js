/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation

    preferences.unshift(0);

    var leng = preferences.length;


    ar = new Array();

    var triangle = 0;
    var element1;
    var index1;
    var element2;
    var index2 ;
    var element3;
    var index3;
    var count= 0;
    for (var i = 1; i < leng; i++) {

        for(var k=0; k< ar.length; k++){
            if(ar[k]==i){
                count++;
            }
        }

        if(count==0) {
            element1 = preferences[i];
            index1 = i;

            index2 = element1;
            if (index2 < leng &&  index2 >0) {
                element2 = preferences[index2];

                index3 = preferences[index2];
                if (index3 < leng &&  index3 >0) {

                    element3 = preferences[index3];



                    if (index1 == element3 && index2 == element1 && index3 == element2 && index1 != index2 && index2 !=index3) {
                        triangle++;
                        ar.push(index1);
                        ar.push(index2);
                        ar.push(index3);
                    }
                }
            }
        }
        count =0;

    }

    return triangle;
};