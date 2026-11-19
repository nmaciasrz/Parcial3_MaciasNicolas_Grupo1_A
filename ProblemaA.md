# Aportes a seguridad social de un contratista por Orden de Prestación de Servicios (OPS)
 
Cuando una persona firma un contrato de prestación de servicios (OPS) con una entidad pública o privada, debe pagar cada mes sus aportes a salud, pensión y riesgos laborales (ARL). Cree un programa que calcule el Ingreso Base de Cotización (IBC), cada aporte y el valor neto que le queda al contratista después de pagar la seguridad social.
 
## Algoritmo
 
### Entradas
 
**Constantes:**
- SMMLV (Salario Mínimo Mensual Legal Vigente): COP $1.750.000 (Pesos colombianos) 
- Porcentaje del IBC sobre los honorarios: 40 %
- Salud: 12.5 % del IBC
- Pensión: 16 % del IBC
- Niveles de Riesgo de ARL (Calcular respecto al IBC): 
  - riesgo 1 = 0.522 %
  - riesgo 2 = 1.044 %
  - riesgo 3 = 2.436 %
- Fondo de solidaridad pensional: 1 % del IBC (solo si el IBC es mayor o igual a 4 SMMLV)
- Tope máximo del IBC: 25 SMMLV

**Variables de entrada:**
- `honorarios`: valor mensual del contrato (mayor que 0)
- `riesgo`: nivel de riesgo ARL (1, 2 o 3)

### Proceso de cálculo
 
1. Validar que los honorarios sean mayores que 0 y que el riesgo sea 1, 2 o 3. Si no, informar el error y terminar.
2. Calcular el IBC como el 40 % de los honorarios:
  - Si el IBC es menor que 1 SMMLV, el IBC pasa a ser 1 SMMLV.
  - Si el IBC es mayor que 25 SMMLV, el IBC pasa a ser 25 SMMLV.
3. Calcular salud (12.5 %) y pensión (16 %) sobre el IBC.
4. Si el IBC es mayor o igual a 4 SMMLV, calcular el fondo de solidaridad (1 %); si no, vale 0.
5. Según el riesgo, calcular la ARL con el porcentaje correspondiente sobre el IBC.
6. Total de aportes: salud más pensión más solidaridad más ARL.
7. Neto del contratista: honorarios menos total de aportes.
  
### Salidas
 
Mostrar con `alert()`: IBC, aporte a salud, aporte a pensión, fondo de solidaridad, ARL, total de aportes y neto del contratista. Si hay un dato inválido, mostrar un mensaje de error.
 
## Casos de prueba
  
| Caso | Entradas (honorarios, riesgo) | Salidas |
|---|---|---|
| 1 | 3.000.000, 1 | IBC 1.750.000 <br> Salud 218.750 <br> Pensión 280.000 <br> Solidaridad 0 <br> ARL 9.135 <br> Total 507.885 <br> Neto 2.492.115 |
| 2 | 3.000.000, 2 | IBC 1.750.000 <br> Salud 218.750 <br> Pensión 280.000 <br> Solidaridad 0 <br> ARL 18.270 <br> Total 517.020 <br> Neto 2.482.980 |
| 3 | 3.000.000, 3 | IBC 1.750.000 <br> Salud 218.750 <br> Pensión 280.000 <br> Solidaridad 0 <br> ARL 42.630 <br> Total 541.380 <br> Neto 2.458.620 |
| 4 | 5.000.000, 1 | IBC 2.000.000 <br> Salud 250.000 <br> Pensión 320.000 <br> Solidaridad 0 <br> ARL 10.440 <br> Total 580.440 <br> Neto 4.419.560 |
| 5 | 5.000.000, 2 | IBC 2.000.000 <br> Salud 250.000 <br> Pensión 320.000 <br> Solidaridad 0 <br> ARL 20.880 <br> Total 590.880 <br> Neto 4.409.120 |
| 6 | 5.000.000, 3 | IBC 2.000.000 <br> Salud 250.000 <br> Pensión 320.000 <br> Solidaridad 0 <br> ARL 48.720 <br> Total 618.720 <br> Neto 4.381.280 |
| 7 | 20.000.000, 1 | IBC 8.000.000 <br> Salud 1.000.000 <br> Pensión 1.280.000 <br> Solidaridad 80.000 <br> ARL 41.760 <br> Total 2.401.760 <br> Neto 17.598.240 |
| 8 | 20.000.000, 2 | IBC 8.000.000 <br> Salud 1.000.000 <br> Pensión 1.280.000 <br> Solidaridad 80.000 <br> ARL 83.520 <br> Total 2.443.520 <br> Neto 17.556.480 |
| 9 | 20.000.000, 3 | IBC 8.000.000 <br> Salud 1.000.000 <br> Pensión 1.280.000 <br> Solidaridad 80.000 <br> ARL 194.880 <br> Total 2.554.880 <br> Neto 17.445.120 |
| 10 | 120.000.000, 1 | IBC 43.750.000 <br> Salud 5.468.750 <br> Pensión 7.000.000 <br> Solidaridad 437.500 <br> ARL 228.375 <br> Total 13.134.625 <br> Neto 106.865.375 |
| 11 | 120.000.000, 2 | IBC 43.750.000 <br> Salud 5.468.750 <br> Pensión 7.000.000 <br> Solidaridad 437.500 <br> ARL 456.750 <br> Total 13.363.000 <br> Neto 106.637.000 |
| 12 | 120.000.000, 3 | IBC 43.750.000 <br> Salud 5.468.750 <br> Pensión 7.000.000 <br> Solidaridad 437.500 <br> ARL 1.065.750 <br> Total 13.972.000 <br> Neto 106.028.000 |
| 13 | 5.000.000, 4 | "Nivel de riesgo no válido, por favor ingrese un nivel válido: 1, 2 o 3" |
| 14 | 0, 1 | "Honorarios no válidos, por favor ingrese un valor válido" |
