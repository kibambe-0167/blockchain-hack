from mysql import connector

connect_ = connector.connect(
  user="root", password="", host="127.0.0.1", database="meditrack"
)


# get all blocks
def getAll():
  try:
    cursor = connect_.cursor()
    cursor.execute("SELECT * FROM blocks")
    result = cursor.fetchall()
    if cursor.countrow > 0:
      return result
    else:
      return "No Data Found"
  except Exception as e:
    return e;
  
# insert a block
def insertBlock( block ):
  try:
    cursor = connect_.cursor()
    cursor.execute("INSERT INTO blocks('indx','previous_hash','time','proof') VALUES ('{block['index']}','{block['previous_hash']}','{block['time']}','{block['proof']}' )")
    if cursor.countrow > 0:
      pass
    else:
      return "No Data Found"
  except Exception as e:
    return e;
  

# get block by proof of work.
def getBlock(proof):
  try:
    cursor = connect_.cursor()
    cursor.execute( f"SELECT * FROM blocks WHERE 'proof'={proof}" )
    result = cursor.fetchall()
    if cursor.countrow > 0:
      return result
    else:
      return "No Data Found"
  except Exception as e:
    return e;
  
  
# get medicine
def getMeds():
  try:
    cursor = connect_.cursor()
    cursor.execute( f"SELECT * FROM manufacturer" )
    result = cursor.fetchall()
    if cursor.countrow > 0:
      return result
    else:
      return "No Data Found"
  except Exception as e:
    return e;
  

# get meds by proof of work.
def getMed( proof ):
  try:
    cursor = connect_.cursor()
    cursor.execute( f"SELECT * FROM manufacturer WHERE 'proof'='{proof}'" )
    result = cursor.fetchall()
    if cursor.countrow > 0:
      return result
    else:
      return "No Data Found"
  except Exception as e:
    return e;
  
  
# insert meds data
def insertMeds( proof, data ):
  try:
    print( data )
    cursor = connect_.cursor()
    cursor.execute("INSERT INTO manufacturer('med_name','manufacturer_name','date_made', 'date_distributed','meds_use','proof') VALUES ('{data['MedicineName']}','{data['ManufacturerName']}','{data['DateMade']}','{data['DateDistr']}', '{data['MedicalUse']}','proof')")
    cursor.commit()
    # data = cursor.fetchall()
    if cursor.countrow > 0:
      return "Data Inserted"
    else:
      return "No Data Found"
  except Exception as e:
    print(e)
    return "Data Not Found";
  
  
# check if a medicine exist in the block chain.
def checkBatch( batch ):
  try:
    cursor = connect_.cursor()
    cursor.execute( f"SELECT * FROM manufacturer WHERE 'id_medicine'='{batch}'" )
    result = cursor.fetchone()
    if cursor.countrow > 0:
      return result
    else:
      return "No Data Found"
  except Exception as e:
    return "Error getting medicine";