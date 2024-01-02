const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result = document.querySelector('#result')
console.log(height, weight, goals, result);
// 적정체중 = (본인신장-100)*0.9
// 적정체중은 ?kg이며 ?kg 초과되셨습니다.
result.addEventListener('click', function(){
    const userHeight = Number(height.value)
    const userWeight = Number(weight.value)
    console.log(userHeight)
    let normal_w = (userHeight-100) * 0.9;
    console.log(normal_w)
    goals.value = (`적정체중은 ${normal_w}kg이며 ${userWeight - normal_w}kg 초과되셨습니다`)
})