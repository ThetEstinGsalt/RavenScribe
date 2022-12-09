

def JWT_ID(id):
    import random
    import string
   
    letters = string.ascii_lowercase+string.digits
    result_str = ''.join(random.choice(letters) for i in range(100))
    qued=((str(id))[::-1])

    zeros=['0' for i in range(10)]
    for k in range(0,len(qued)):
        zeros.pop(k)

    encrypted_id=''.join(zeros)+qued

    secLoc=[11,3,17,22,31,51,57,69,70,86]

    i=0
    result_list=list(result_str)
    id_list=list(encrypted_id)
    for j in secLoc:
  
        result_list[j]=id_list[i]

        i+=1

    Jwt_token=''.join(result_list)


    return Jwt_token