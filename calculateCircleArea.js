const r = Number(process.argv[2]);

const calculateCircleArea = (radius) => {
    const totalArea = (Math.PI * (radius) * (radius));
    console.log(`Yarıçapı (${radius}) olan dairenin alanı: (${totalArea})`);
}

calculateCircleArea(r);