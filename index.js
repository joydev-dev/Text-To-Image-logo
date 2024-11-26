// const inputText = document.getElementById("input")
// const image = document.getElementById("image")
// const button = document.getElementById("btn")
// const token = "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"
// const downloadButton = document.getElementById("downloadBtn");



// async function query(data) {
//    // document.write("Genarating........")
//    image.src = "loader.gif"
//    const response = await fetch(
//       "https://api-inference.huggingface.co/models/prithivMLmods/Logo-Design-Flux-LoRA",
//       {
//          headers: {
//             Authorization: `Bearer ${token}`

//          },
//          method: "POST",
//          body: JSON.stringify({ "inputs": inputText.value }),
//       }
//    );
//    const result = await response.blob();
//    return result;
// }
// button.addEventListener('click', async function () {
//    query().then((response) => {
//       const objectURL = URL.createObjectURL(response)
//       image.src = objectURL
//    });
// })

// downloadButton.addEventListener('click', function () {
//    if (image.src) {
//        const link = document.createElement('a');
//        link.href = image.src; // Use the image source as the link
//        link.download = 'generated-image.png'; // Set the default file name
//        document.body.appendChild(link);
//        link.click(); // Trigger the download
//        document.body.removeChild(link); // Clean up
//    } else {
//        alert("Please generate an image first!");
//    }
// });

// This is  a !st version model ZB-tech/Text-to-Image
// const _0x210345 = _0x1d8b; function _0x2be2() { const _0x2df4d5 = ['8681120vzAFxP', 'image', 'https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image', 'then', 'src', '18bGwkbg', 'blob', '12845960plWShq', '1901568gJZDDG', 'btn', 'stringify', 'getElementById', '/loader.gif', 'click', '519981AHXnHf', 'value', '896591lKBKcg', '1279085dRaUdf', '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', 'Bearer\x20', 'createObjectURL', '8jKIHHk', 'input', '5154882NktIhf']; _0x2be2 = function () { return _0x2df4d5; }; return _0x2be2(); } (function (_0x3bf7ce, _0x1461f1) { const _0x2e16d5 = _0x1d8b, _0x584f84 = _0x3bf7ce(); while (!![]) { try { const _0xe8369e = -parseInt(_0x2e16d5(0x117)) / 0x1 + -parseInt(_0x2e16d5(0x10f)) / 0x2 + parseInt(_0x2e16d5(0x115)) / 0x3 + -parseInt(_0x2e16d5(0x104)) / 0x4 * (parseInt(_0x2e16d5(0x118)) / 0x5) + parseInt(_0x2e16d5(0x106)) / 0x6 + -parseInt(_0x2e16d5(0x107)) / 0x7 + -parseInt(_0x2e16d5(0x10e)) / 0x8 * (-parseInt(_0x2e16d5(0x10c)) / 0x9); if (_0xe8369e === _0x1461f1) break; else _0x584f84['push'](_0x584f84['shift']()); } catch (_0x25d1e3) { _0x584f84['push'](_0x584f84['shift']()); } } }(_0x2be2, 0x9d6bb)); function _0x1d8b(_0x3ee98b, _0x1ca075) { const _0x2be264 = _0x2be2(); return _0x1d8b = function (_0x1d8b5e, _0x55c411) { _0x1d8b5e = _0x1d8b5e - 0x103; let _0x4bf894 = _0x2be264[_0x1d8b5e]; return _0x4bf894; }, _0x1d8b(_0x3ee98b, _0x1ca075); } const inputText = document['getElementById'](_0x210345(0x105)), image = document[_0x210345(0x112)](_0x210345(0x108)), button = document[_0x210345(0x112)](_0x210345(0x110)), token = _0x210345(0x119); async function query(_0x3cd509) { const _0x44c190 = _0x210345; image[_0x44c190(0x10b)] = _0x44c190(0x113); const _0x99fd0c = await fetch(_0x44c190(0x109), { 'headers': { 'Authorization': _0x44c190(0x11a) + token }, 'method': 'POST', 'body': JSON[_0x44c190(0x111)]({ 'inputs': inputText[_0x44c190(0x116)] }) }), _0x3cdf3d = await _0x99fd0c[_0x44c190(0x10d)](); return _0x3cdf3d; } button['addEventListener'](_0x210345(0x114), async function () { const _0x193db9 = _0x210345; query()[_0x193db9(0x10a)](_0x57925b => { const _0x49ccc4 = _0x193db9, _0x2fd63d = URL[_0x49ccc4(0x103)](_0x57925b); image[_0x49ccc4(0x10b)] = _0x2fd63d; }); });


// This is V.2 of model Image & Logo Design Logo-Design-Flux-LoRA model


// function _0x3426(_0x51b195,_0x1f56fb){const _0xaa1b8f=_0xaa1b();return _0x3426=function(_0x342622,_0x405fec){_0x342622=_0x342622-0xda;let _0x56864b=_0xaa1b8f[_0x342622];return _0x56864b;},_0x3426(_0x51b195,_0x1f56fb);}const _0x49c471=_0x3426;(function(_0x18834e,_0x481261){const _0x42c8e7=_0x3426,_0x1ecdd9=_0x18834e();while(!![]){try{const _0x432e64=-parseInt(_0x42c8e7(0xea))/0x1*(parseInt(_0x42c8e7(0xe4))/0x2)+parseInt(_0x42c8e7(0xe0))/0x3+parseInt(_0x42c8e7(0xf1))/0x4+-parseInt(_0x42c8e7(0xe2))/0x5+-parseInt(_0x42c8e7(0xef))/0x6+parseInt(_0x42c8e7(0xe8))/0x7*(-parseInt(_0x42c8e7(0xe5))/0x8)+-parseInt(_0x42c8e7(0xed))/0x9*(-parseInt(_0x42c8e7(0xec))/0xa);if(_0x432e64===_0x481261)break;else _0x1ecdd9['push'](_0x1ecdd9['shift']());}catch(_0x4376b8){_0x1ecdd9['push'](_0x1ecdd9['shift']());}}}(_0xaa1b,0x7e4d5));function _0xaa1b(){const _0x1c101b=['btn','101091XTdfVB','getElementById','2088405rWfgUF','image','2MWJrMi','2871032ImjeyA','Bearer\x20','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','14DPwZvi','input','701463WZaMlm','https://api-inference.huggingface.co/models/prithivMLmods/Logo-Design-Flux-LoRA','13373210fXnwHE','18urUZUm','addEventListener','2950458tIAQuw','stringify','550556SWAveQ','src','click','createObjectURL','blob','then','/loader.gif'];_0xaa1b=function(){return _0x1c101b;};return _0xaa1b();}const inputText=document[_0x49c471(0xe1)](_0x49c471(0xe9)),image=document[_0x49c471(0xe1)](_0x49c471(0xe3)),button=document['getElementById'](_0x49c471(0xdf)),token=_0x49c471(0xe7);async function query(_0x4604c5){const _0x1c7ca7=_0x49c471;image[_0x1c7ca7(0xf2)]=_0x1c7ca7(0xde);const _0x5b1e53=await fetch(_0x1c7ca7(0xeb),{'headers':{'Authorization':_0x1c7ca7(0xe6)+token},'method':'POST','body':JSON[_0x1c7ca7(0xf0)]({'inputs':inputText['value']})}),_0x4d0c9d=await _0x5b1e53[_0x1c7ca7(0xdc)]();return _0x4d0c9d;}button[_0x49c471(0xee)](_0x49c471(0xda),async function(){const _0x564895=_0x49c471;query()[_0x564895(0xdd)](_0x12753a=>{const _0xb7e2e7=_0x564895,_0x1ae877=URL[_0xb7e2e7(0xdb)](_0x12753a);image[_0xb7e2e7(0xf2)]=_0x1ae877;});});


// Download button add

const _0x5bd312=_0x8201;function _0x8201(_0x336fc2,_0x5e39d1){const _0xca272d=_0xca27();return _0x8201=function(_0x820122,_0xb77ced){_0x820122=_0x820122-0x140;let _0x1e96da=_0xca272d[_0x820122];return _0x1e96da;},_0x8201(_0x336fc2,_0x5e39d1);}(function(_0x55e48b,_0x93ede){const _0x243441=_0x8201,_0x53185c=_0x55e48b();while(!![]){try{const _0x4dea0e=-parseInt(_0x243441(0x158))/0x1*(-parseInt(_0x243441(0x14a))/0x2)+-parseInt(_0x243441(0x159))/0x3+parseInt(_0x243441(0x15c))/0x4*(-parseInt(_0x243441(0x154))/0x5)+parseInt(_0x243441(0x146))/0x6+parseInt(_0x243441(0x14d))/0x7*(-parseInt(_0x243441(0x15d))/0x8)+parseInt(_0x243441(0x142))/0x9*(-parseInt(_0x243441(0x140))/0xa)+parseInt(_0x243441(0x150))/0xb*(parseInt(_0x243441(0x141))/0xc);if(_0x4dea0e===_0x93ede)break;else _0x53185c['push'](_0x53185c['shift']());}catch(_0x567644){_0x53185c['push'](_0x53185c['shift']());}}}(_0xca27,0xaf5ff));const inputText=document[_0x5bd312(0x15f)]('input'),image=document[_0x5bd312(0x15f)](_0x5bd312(0x157)),button=document[_0x5bd312(0x15f)](_0x5bd312(0x14f)),token='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',downloadButton=document['getElementById'](_0x5bd312(0x145));async function query(_0x3c1d04){const _0x188ca7=_0x5bd312;image[_0x188ca7(0x14b)]=_0x188ca7(0x15e);const _0x1851c3=await fetch('https://api-inference.huggingface.co/models/prithivMLmods/Logo-Design-Flux-LoRA',{'headers':{'Authorization':_0x188ca7(0x153)+token},'method':'POST','body':JSON[_0x188ca7(0x15a)]({'inputs':inputText[_0x188ca7(0x160)]})}),_0x5276e0=await _0x1851c3['blob']();return _0x5276e0;}button[_0x5bd312(0x149)]('click',async function(){const _0x52328a=_0x5bd312;query()[_0x52328a(0x151)](_0x3fe88e=>{const _0x8b9892=_0x52328a,_0x15b59b=URL[_0x8b9892(0x144)](_0x3fe88e);image[_0x8b9892(0x14b)]=_0x15b59b;});}),downloadButton[_0x5bd312(0x149)]('click',function(){const _0x3cfd87=_0x5bd312;if(image[_0x3cfd87(0x14b)]){const _0x2af2d5=document[_0x3cfd87(0x152)]('a');_0x2af2d5[_0x3cfd87(0x148)]=image[_0x3cfd87(0x14b)],_0x2af2d5[_0x3cfd87(0x143)]=_0x3cfd87(0x15b),document['body'][_0x3cfd87(0x156)](_0x2af2d5),_0x2af2d5[_0x3cfd87(0x14e)](),document[_0x3cfd87(0x155)][_0x3cfd87(0x14c)](_0x2af2d5);}else alert(_0x3cfd87(0x147));});function _0xca27(){const _0x5dc798=['generated-image.png','476328PdAKHN','9411496mwVius','loader.gif','getElementById','value','220LLaHCw','84RSJjSP','261117MpYQua','download','createObjectURL','downloadBtn','8258706QozRLQ','Please\x20generate\x20an\x20image\x20first!','href','addEventListener','604196xgzOex','src','removeChild','7lirChF','click','btn','2495614EtsMHa','then','createElement','Bearer\x20','5FJqRUi','body','appendChild','image','1RYhujj','1843581MNsFTL','stringify'];_0xca27=function(){return _0x5dc798;};return _0xca27();}