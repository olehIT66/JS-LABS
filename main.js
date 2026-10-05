console.log("Інструкція: triangle(val1, 'type1', val2, 'type2').\nДоступні типи: leg, hypotenuse, adjacent angle, opposite angle, angle.");

function triangle(v1, t1, v2, t2) {
    if (v1 <= 0 || v2 <= 0) return "Zero or negative input";
    
    let a, b, c, al, be, r = Math.PI / 180;
    let get = (type) => t1 === type ? v1 : (t2 === type ? v2 : null);

    if (t1 === "leg" && t2 === "leg") { a = v1; b = v2; }
    else if (get("leg") && get("hypotenuse")) { a = get("leg"); c = get("hypotenuse"); b = Math.sqrt(c*c - a*a); }
    else if (get("leg") && get("adjacent angle")) { a = get("leg"); be = get("adjacent angle"); c = a / Math.cos(be*r); b = a * Math.tan(be*r); }
    else if (get("leg") && get("opposite angle")) { a = get("leg"); al = get("opposite angle"); c = a / Math.sin(al*r); b = a / Math.tan(al*r); }
    else if (get("hypotenuse") && get("angle")) { c = get("hypotenuse"); al = get("angle"); a = c * Math.sin(al*r); b = c * Math.cos(al*r); }
    else { console.log("Помилка: невірні типи. Перечитайте інструкцію."); return "failed"; }

    if (!c) c = Math.sqrt(a*a + b*b);
    if (!al) al = Math.asin(a/c) / r;
    if (!be) be = 90 - al;

    if (a >= c || b >= c || al >= 90 || be >= 90 || isNaN(b) || isNaN(c)) { 
        console.log("Некоректні значення сторін або кутів."); 
        return "failed"; 
    }
    
    console.log(`a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${al}\nbeta = ${be}`);
    return "success";
}