public with sharing class ApexController {
    @AuraEnabled
    public static Integer getRandomNumber(Integer min, Integer max, Integer numAnterior) {
        Integer numeroAleatorio = Integer.valueOf(Math.random() * (max - min + 1)) + min;
        if(numeroAleatorio == numAnterior){
            return getRandomNumber(min, max, numAnterior);
        }
        return  numeroAleatorio;
    }
}