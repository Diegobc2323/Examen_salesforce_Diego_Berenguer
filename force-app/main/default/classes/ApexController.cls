public with sharing class ApexController {
    @AuraEnabled
    
    public static Integer getRandomNumber(Integer min, Integer max, List<Integer> numAnterior) {
        Integer numeroAleatorio = Integer.valueOf(Math.random() * (max - min + 1)) + min;
        if(numAnterior.contains(numeroAleatorio)){
            return getRandomNumber(min, max, numAnterior);
        }
        return  numeroAleatorio;
    }
}