function introduction(name){
    if (name === 'Aki') 
    return 'Hi, my name is Aki.'
    if (name = 'Samip')
    return 'Hi, my name is Samip.'
}
function introductionWithLanguage(name, language){
    if (name === "Aki", language === "Ember.js")
    return "Hi, my name is Aki and I am learning to program in Ember.js."
    if (name === "Samip", language === "React")
    return "Hi, my name is Samip and I am learning to program in React."
}
function introductionWithLanguageOptional(name, language = "Javascript"){
    if (name === "Gracie", language === "Python")
    return "Hi, my name is Gracie and I am learning to program in Python."
     if (name === "Gracie")
    return "Hi, my name is Gracie and I am learning to program in JavaScript."
   
}