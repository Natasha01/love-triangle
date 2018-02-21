/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
    var is_involved = [];
    var a;
    var b;
    var c;
    for (var i = 0; i < preferences.length; i++){
        is_involved[i] = false;
    }
    //var current_spichonee = 0;
    for (var current_spichonee = 0; current_spichonee < preferences.length; current_spichonee++){
        if (!(is_involved[current_spichonee]) && (preferences[current_spichonee]) != (current_spichonee + 1)) {
            a = current_spichonee + 1;
            b = preferences[current_spichonee];
            c = preferences[b - 1];
            if (preferences[c - 1] === a){
                count++;
                is_involved[a - 1] = true;
                is_involved[b - 1] = true;
                is_involved[c - 1] = true;
                a = 0;
                b = 0;
                c = 0;
            }           
        }
        
    }
    return count;
};
