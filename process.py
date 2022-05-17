f = open('expr-results.csv', 'r')
result = []

for line in f:
    if line[0] == '#':
        continue
    else:
        splitline = line.split(',')
        if len(splitline) > 12 and splitline[8] == 'response' and splitline[12] == 'experimental':
            processed = [splitline[10], splitline[13], splitline[14].strip(), splitline[15]]
            result.append(','.join(processed) + '\n')

f.close()

rf = open('expr-results-processed.csv', 'w')
rf.write('response,itemNo,constructionType,gapType\n')
rf.writelines(result)
rf.close()

