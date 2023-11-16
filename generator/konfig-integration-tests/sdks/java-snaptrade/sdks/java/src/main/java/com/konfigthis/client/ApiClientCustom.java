package com.konfigthis.client;

import com.google.gson.Gson;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class ApiClientCustom {

    protected void requestBeforeHook(String baseUrl, String path, String method, List<Pair> queryParams,
            List<Pair> collectionQueryParams, Object body, Map<String, String> headerParams,
            Map<String, String> cookieParams, Map<String, Object> formParams,
            String[] authNames, ApiClient client) {
        Pair timestamp = new Pair("timestamp", String.valueOf(System.currentTimeMillis() / 1000L));
        queryParams.add(timestamp);
    }

    protected void requestAfterHook(String url, String path, String method, List<Pair> queryParams,
            List<Pair> collectionQueryParams, Object body, Map<String, String> headerParams,
            Map<String, String> cookieParams, Map<String, Object> formParams,
            String[] authNames, String payload, ApiClient client) {
        if (client.consumerKey == null)
            throw new RuntimeException("Set the consumer key by configuring Configuration#consumerKey");
        Gson gson = JSON.getGson();
        Object map = body instanceof List ? body : gson.fromJson(payload, TreeMap.class);
        String sortedJson = map == null ? "\"\"" : gson.toJson(map);
        String queryString = url.split("\\?")[1];
        String data = String.format("{\"content\":%s,\"path\":\"/api/v1%s\",\"query\":\"%s\"}",
                payload == null || payload.equals("") || payload.equals("{}") ? "null" : sortedJson, path, queryString);
        byte[] hmacSha256Bytes;
        try {
            hmacSha256Bytes = calculateHmacSha256(data, client.consumerKey);
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            throw new RuntimeException(e);
        }
        String hmacSha256Base64 = encodeBase64(hmacSha256Bytes);
        headerParams.put("Signature", hmacSha256Base64);
    }

    private static byte[] calculateHmacSha256(String message, String key)
            throws NoSuchAlgorithmException, InvalidKeyException {
        SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(secretKeySpec);
        return mac.doFinal(message.getBytes(StandardCharsets.UTF_8));
    }

    private static String encodeBase64(byte[] bytes) {
        return Base64.getEncoder().encodeToString(bytes);
    }

}
