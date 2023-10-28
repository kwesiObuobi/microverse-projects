CODES = {
  '.-' => 'A',
  '-...' => 'B',
  '-.-.' => 'C',
  '-..' => 'D',
  '.' => 'E',
  '..-.' => 'F',
  '--.' => 'G',
  '....' => 'H',
  '..' => 'I',
  '.---' => 'J',
  '-.-' => 'K',
  '.-..' => 'L',
  '--' => 'M',
  '-.' => 'N',
  '---' => 'O',
  '.--.' => 'P',
  '--.-' => 'Q',
  '.-.' => 'R',
  '...' => 'S',
  '-' => 'T',
  '..-' => 'U',
  '...-' => 'V',
  '.--' => 'W',
  '-..-' => 'X',
  '-.--' => 'Y',
  '--..' => 'Z'
}.freeze

# Decode single character
def decode_char(char)
  CODES[char].upcase
end

puts decode_char('.-')

# Decode entire word in morse code
def decode_word(word)
  decoded = ''
  word.split.each { |w| decoded += decode_char(w) }
  decoded
end

puts(decode_word('-- -.--'))

# Decode entire morse message
def decode_message(msg)
  decoded = []
  msg.split('   ').each { |m| decoded << decode_word(m) }
  decoded.join(' ')
end

puts(decode_message('-- -.--   -. .- -- .'))
