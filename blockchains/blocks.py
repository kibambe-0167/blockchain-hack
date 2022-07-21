
# For timestamp
import datetime

# Calculating hash add to the blocks
import hashlib
import json
from flask import Flask, jsonify


class Blockchain:

	# create first block and set hash to "0"
	def __init__(self):
		self.chain = []
		self.create_block(proof=1, previous_hash='0', data={})

	# create a new block
	# to add further blocks
	# into the chain
	def create_block(self, proof, previous_hash, data):
		block = {'index': len(self.chain) + 1,
				'timestamp': str(datetime.datetime.now()),
				'proof': proof,
				'previous_hash': previous_hash,
				'data': data,
    }
		self.chain.append(block)
  
		return block
	
	
	# display the previous block
	def print_previous_block(self):
		return self.chain[-1]
	
	# This is the function for proof of work
	# and used to successfully mine the block
	def proof_of_work(self, previous_proof):
		new_proof = 1
		check_proof = False
		
		while check_proof is False:
			hash_operation = hashlib.sha256(
				str(new_proof**2 - previous_proof**2).encode()).hexdigest()
			if hash_operation[:5] == '00000':
				check_proof = True
			else:
				new_proof += 1
				
		return new_proof

  # get hash of the block
	def hash(self, block):
		encoded_block = json.dumps(block, sort_keys=True).encode()
		return hashlib.sha256(encoded_block).hexdigest()


  # check and validate the blockchain
	def chain_valid(self, chain):
		previous_block = chain[0]
		block_index = 1
		
		while block_index < len(chain):
			block = chain[block_index]
      # if prev hash dont match hash in current block, 
      # then return false
			if block['previous_hash'] != self.hash(previous_block):
				return False
			
			previous_proof = previous_block['proof']
			proof = block['proof']
			hash_operation = hashlib.sha256(
				str(proof**2 - previous_proof**2).encode()).hexdigest()
			
      # if hash doesn't start with 5 zeros, then return false
			if hash_operation[:5] != '00000':
				return False
			previous_block = block
			block_index += 1
		
		return True






# var block = {
#     prevToken: "rctvyoi57687980906yuhkjkhj",
#     token: "567890oiighvnbmnmlkjihg",
#     data: {
#         "name": "tfyguh",
#         "surname": "tyguhoi",
#         "amount": '567.678',
#     }
# }