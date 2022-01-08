import math

def perHit(offense, defense):
    return max(0, (offense*1.5) *  1.0 - min(1, max(0, defense / (max(1, offense) + offense * 0.4)))) + math.ceil(offense * (0.05 + (0.05 * max(1, offense)**1.3)/max(1, offense)**1.6))    


def calc(hit, hps, dc, cc, cd): # average hit, hits per second, dodge chance, crit chance %, crit damage %
    return hit * hps * (1- (dc/100)) * (1+(cc/100)*(cd/100))


print(perHit(217.5, 3))
print(calc(perHit(217.5, 3), 6, 5, 10, 140))